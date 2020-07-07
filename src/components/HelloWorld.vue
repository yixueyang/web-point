<template>
  <div class="hello">
     <!-- <h1>数据驱动视图：</h1><span>数据变化引起视图发生改变</span> -->
     <h1>Object.defineProperty,对object数据进行侦测</h1>
     <span>刚开始看的时候看vue的数据驱动视图，就遇到了第一个问题，
         源码中使用defineProperty方法可以在数据进行读写时进行监测，但是defineProperty这个看着眼熟，但是完全没有用过的方法  是什么鬼啊</span>
      <span>Object.defineProperty：对属性值进行读写，</span>
      <p>
         object.defineProperty(val1,val2,val3)<br/>
         val1: 你要进行操作的属性所在对象<br/>
         val2: 属性名字<br/>
         val3: 操作属性的方法（就是在这里进行数据的读写监听）
      </p>

      <pre>
         let car = {}
         let val = 3000
         Object.defineProperty(car, 'price', {
            enumerable: true,
            configurable: true,
            get(){
              console.log('price属性被读取了')
              return val
            },
            set(newVal){
              console.log('price属性被修改了')
              val = newVal
            }
          })
      </pre>
      <p>可以先在控制台上运行，并输入car.price和car.price = 1555体验一下数据的读写监听</p>
      <p>但是enumerable和configurable又是什么鬼????查资料找到了这里有五个描述符</p>
      <p>
          value、enumerable、configurable、get、set、writable<br/>
          value:你要改变的那个属性值；<br/>
          writable：true//可通过赋值或者属性定义改变属性值；false//不可以改变属性值<br/>
          enumerable：是否可以用for in 或者 Object.keys()进行遍历（可枚举）<br/>
          configurable:是否可删除属性，是否可配置(这个作用看着好迷啊)<br/>
             ****着重说一下这个configurable和writable，当他两的设置从false变到true的时候会报错，就只能正向变化，不能反向变化；而且在单个定义属性的时候，configurable不论
              true还是false都对writable不起作用哎
      </p>
        <pre>
         let car = {}
         let val = 3000
         Object.defineProperty(car, 'price', {
            configurable: false,
          })
           Object.defineProperty(car, 'price', {
            configurable: true,
          })
      </pre>
      <h3>所以你看看vue的源码，他在使用configurable的时候会先判断configurable是否为false</h3>
     <pre>
         if (property && property.configurable === false) {
            return
          }
      </pre>
      <p>******把对象转化为可观测的数据，就是给对象加上get和set属性</p>
     <div>往后看的时候，源码中用defineProperty方法给添加get和set属性的对象加标识</div>


      <div>我看源码解说通过递归将对象都加上get、set,简单模拟一下这个 过程吧。。。。先想想要干啥，首先找出要监控的对象，然后给对象加set,get<br>
         ① 通过constructor获取car中所有的对象<br>
         ② 将对象变成有对象名组成的数组（这一步主要是通过val[key]判断这个对象有没有嵌套另一个对象）<br>
         ③ 将每一个对象遍历，并加上get、set属性<br>
        代码如下：
      </div>
      <pre>
         let car = new Observer({
          'brand':'BMW',
          'price':3000,
          'obj':[{
              'test':11
          }]
      })

        //assets/js/getNewObject.js

        export class Observer{
          constructor(value){
           console.log( value)//获取对象的所有值
            this.walk(value)
          }
          walk (obj) {
            const keys = Object.keys(obj)//返回枚举对象名组成的数组["brand", "price", "obj"]
            for (let i = 0; i < keys.length; i++) {
              //遍历每一个对象，并加上 get、set
              defineReactive(obj, keys[i])
            }
          }
        }


        //assets/js/defineReactive.js

        export function defineReactive (obj,key,val) {
            // 如果只传了obj和key，那么val = obj[key]
            console.log(arguments)
            //arguments.length判断传入的参数个数，目前这个就只传入了两个
            if (arguments.length === 2) {
              val = obj[key]
            }
            console.log(typeof val)
            //判断传入的是不是object,如果是object就证明还有深层次的对象没有遍历出来，需要重新for一次
            //这里应该就是通过递归来把object对象的每个属性都找出来，比如'obj'就是一个object对象，所以还需要重新再便利一次
            if(typeof val === 'object'){
              new Observer(val)
            }
            Object.defineProperty(obj, key, {
              enumerable: true,
              configurable: true,
              get(){
                console.log(`${key}属性被读取了`);
                return val;
              },
              set(newVal){
                if(val === newVal){
                  return
                }
                console.log(`${key}属性被修改了`);
                val = newVal;
              }
            })
          }
      </pre>
    <div>
       好啦 ，，， ，源码中还有给转化的对象添加标记_ob_和对象是数组时处理逻辑没有展示,后面再说。。。。。
    </div>
    <div>上面的代码已经让object变成可侦测的啦，那然后嘞，检测到数据变化后，去通知视图进行更新吗，但是该去通知哪个视图更新啊   迷惑</div>
    <div>看文档说，给数据建一个数组，把依赖这些数据的东东放进数组里，叫依赖数组，每当这个数据变化时，就通知这个依赖数组里面的数据进行更新，好主意哎  机智机智</div>
    <div>也就是读取数据时（getter）把他放进依赖数组里，当数据变化时（setter），就去通知数组更新</div>
    <div>源码中扩展了一下这个依赖数组的功能，让数组可以进行添加、通知、删除，就叫他依赖管理器叭</div>
    <h3>创建依赖管理器</h3>
    <div>先想想依赖管理器需要哪些功能呢，比如要对管理器的东东进行 添加、删除、通知更新这些就差不多了</div>
    <div>
      <button @click="click">{{car.price}}</button>
    </div>
  </div>
</template>

<script>
import {Observer} from "../assets/js/getNewObject";

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      car:[]
    }
  },
  created(){
    this.exampleFun();
    console.log('__proto__' in {})
    console.dir({})
       this.car = new Observer({
          'brand':'BMW',
          'price':3000,
          'obj':[{
              'test':11
          }]
      })
  },
  methods:{
    exampleFun(){
      const property = Object.getOwnPropertyDescriptor(Object, "string");
      let Person = {};
      let temp = null;
      Object.defineProperty(Person,'name',{
        value:'Jack',
        writable:true,
        configurable:false
      })
      Object.defineProperty(Person,'name',{
        value:'rose'
      })
     // Person.name = 'rose'
    },
      click(){
        this.car.price++;
        console.log( this.car.price)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*pre{*/
/*  background-color: black;*/
/*    color: white;*/
/*}*/
</style>
