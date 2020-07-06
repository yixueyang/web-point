<template>
  <div class="hello">
     <!-- <h1>数据驱动视图：</h1><span>数据变化引起视图发生改变</span> -->
     <h1>Object.defineProperty</h1>
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
      <h5>所以你看看vue的源码，他在使用configurable的时候会先判断configurable是否为false</h5>
     <pre>
         if (property && property.configurable === false) {
            return
          }
      </pre>
      <p>******把对象转化为可观测的数据，就是给对象加上get和set属性</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    this.exampleFun()
  },
  methods:{
    exampleFun(){
      const property = Object.getOwnPropertyDescriptor(Object, "string");
       console.log(property)
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
      console.log(Person.name)
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
