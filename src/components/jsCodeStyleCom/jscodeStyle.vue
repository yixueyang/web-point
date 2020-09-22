<template xmlns="http://www.w3.org/1999/html">
<div id="jscodeStyleId">

  <h2><span>1.</span>手动实现一个new</h2>
  <h3>new的过程</h3>
  <p>1.创建一个空对象{}</p>
  <p>2.将空对象的_proto_指向Bar的prototype</p>
  <p>3.把Bar的this指向空对象</p>
  <p>4.通过 new创建的每个对象将最终被 [[Prototype]]链接到这个函数的 prototype对象上。</p>
  <p>5.如果函数没有返回对象类型 Object(包含 Functoin,Array,Date,RegExg,Error)，那么 new表达式中的函数调用将返回该对象引用。</p>
  <pre>
    function New(func){
     let obj = {};
     obj._proto_ = func.prototype;
     let ret = func.apply(obj,Array.prototype.slice.call(arguments,1));
     if(typeof ret === "object"||typeof ret === "function" && ret !== null){
       return ret
     }
       return obj
    }
    let abj = New B()
  </pre>
  <span>区分一下apply和call<br>
    A.apply(B,[参数1,参数2,参数3……])<br>
    A.call(B,参数1,参数2,参数3……)<br>
    功能是一样的:把A函数里的this,指向B,并把参数传给A
  </span>

  <h2><span>2.</span>手动实现一个JSON.stringify(JSON格式的转换)</h2>
  <p>1.判断传入的数据类型</p>
  <p>2.非对象类型,转为字符串输出</p>
  <p>3.对象类型,判断是array还是string</p>
  <p>3.1 遍历对象的每个值，把值都转换为带双引号的类型，放入json中</p>
  <p>3.2 根据是array还是string,觉得输出的是array还是string</p>
  <pre>
   function toJsonStringify(obj) {
      let type = typeof obj;
      if(type !== "object" || type === null){
          if(/string|undefined|function/.test(type)){
              obj = '"' + obj + '"';
          }
          return String(obj);
      }else{
          let json = [];
          let arr = ( obj && obj.constructor === Array);
          for(let k in obj){
            let v = obj[k];
            let type = typeof k;
              if(/string|undefined|function/.test(type)){
                  v = '"' + v + '"';
              }else if(type === "object"){
                 v = toJsonStringify(v)
              }
              json.push((arr?"":'"'+k+'":') + String(v))
          }
          return (arr?"[":"{") + String(json) + (arr ? "]" : "}")
      }
   }
  </pre>
  <h2><span>3.</span>防抖和节流</h2>
  <h4>(1).防抖（防止多次点击）</h4>
  <p>立即执行:在触发事件后，等待一段时间在执行，如果在等待时间内再次触发则重新计算时间</p>
  <p>非立即执行:触发事件后会立刻执行，然后一段时间内不触发事件才能继续执行函数</p>

  <p>*** 重点在于延时的判断，等待50s后再执行</p>

  <pre>
    @fn:函数
    @wait:延迟执行时间
    @immediate:立即执行or非立即执行
    function debounce(fn,wait = 50,immediate){
       let timeout;
       return function () {
           let context = this;
           let args = arguments;
           if(timeout) clearTimeout(timeout);
           if(immediate){
                //立即执行
               var callNow = !timeout;
               timeout = setTimeout(function(){
                   //执行函数
                   timeout = null
               },wait)
               if(callNow) fn.apply(context, args)
           }else{
                //非立即执行
               timeout = setTimeout(function(){
                   //执行函数
                   fn.apply(context, args)
               },wait)
           }

       }
    }
  </pre>

  <h4>(2).节流（防止多次点击）</h4>
  <p>多次触发，但是只需要在结束时执行方法：比如输入框、</p>

  <h2><span>4.</span>手写instanceof </h2>
<pre>
   function instanceFun(left,right){
        let proto = left.__proto__;
        let prototype = right.prototype
        console.log(proto,prototype)
        while (true){
            if(proto == null) return false
            if(proto == prototype) return true
            proto = proto.__proto__
        }
    }
   console.log(instanceFun('1',Object))
</pre>
  <h2><span>5.</span>js深拷贝</h2>
  <p>
    数据类型分为基本数据类型和引用数据类型<br>
    基本数据类型：number、string、boolean、null、underfined、symbol、BigInt(ES10新特性：表示任意精度整数，number最大可以表示正负2^53 - 1,BigInt可以表示比这个还大的数)<br>
    引用数据类型：对象{a:1}、数组[1,2,3]、函数<br>
    两种数据类型的存储方式不一样<br>
    eg:<br>
       基本类型的存储：在栈内存中直接存储对象名和值<br>
     <img src="../../assets/img/easyCopy.PNG" height="170" width="234"/><br>
       引用类型的存储：在栈内存中存对象名和堆地址，堆地址会指向堆内存中的值<br>
    所以在复制引用类型数据的时候，只会复制堆地址，值还是共用一个值的，因此改变其中的一个值的时候，会让复制的也会改变，所以需要对引用数据类型进行深拷贝
  </p>
  <p style="font-weight: bold;font-size: 14px">未使用深拷贝前</p>
  <img src="../../assets/img/deepCopy.PNG" height="166" width="541"/>
  <p style="font-weight: bold;font-size: 14px">使用深拷贝后</p>
  <img src="../../assets/img/copy.PNG" height="166" width="554"/>

  <p>手写深拷贝</p>

  <pre>
    function deepCopy(val){
       if(typeof val == "object"){
       //引用数据
           let result = val.constructor == Array?[]:{}
           for (let i in val){
              result[i] = typeof val[i] == "object"? deepCopy(val[i]):val[i]
           }
       }else{
           //基本数据
           let result = val
       }
       return result
    }
  </pre>

</div>
</template>

<script>
    export default {
        name: "jscodeStyle",
        data(){
            return{}
        },
        created(){
            //模拟new
            // function aaa(){
            //     this.name = '123'
            // }
            // function New(func){
            //     let obj = {};
            //     obj._proto_ = func.prototype;
            //     let ret = func.apply(obj,Array.prototype.slice.call(arguments,1));
            //     if(typeof ret === "object"||typeof ret === "function" && ret !== null){
            //         return ret
            //     }
            //     return obj
            // }
            // let Abj = New(aaa)
            // console.log(Abj)

         //    function toJsonStringify(obj) {
         //        let type = typeof obj;
         //        if(type !== "object" || type === null){
         //            if(/string|undefined|function/.test(type)){
         //                obj = '"' + obj + '"';
         //            }
         //            return String(obj);
         //        }else{
         //            let json = [];
         //            let arr = ( obj && obj.constructor === Array);
         //            for(let k in obj){
         //              let v = obj[k];
         //              let type = typeof k;
         //                if(/string|undefined|function/.test(type)){
         //                    v = '"' + v + '"';
         //                }else if(type === "object"){
         //                   v = toJsonStringify(v)
         //                }
         //                json.push((arr?"":'"'+k+'":') + String(v))
         //            }
         //            return (arr?"[":"{") + String(json) + (arr ? "]" : "}")
         //        }
         //    }
         //
         // console.log( toJsonStringify({x: 5})) //{"x":"5"}
         //     console.log( toJsonStringify([1,false,"false"])) //["1","false","false"]
         //    console.log(toJsonStringify(2)) //["1","false","false"]

            //防抖
            // function debounce(fn,wait = 50,immediate){
            //     let timeout;
            //
            //    return function () {
            //        let context = this;
            //        let args = arguments;
            //
            //        if(timeout) clearTimeout(timeout);
            //        if(immediate){
            //            var callNow = !timeout;
            //            timeout = setTimeout(function(){
            //                //执行函数
            //                timeout = null
            //            },wait)
            //            if(callNow) fn.apply(context, args)
            //        }else{
            //            timeout = setTimeout(function(){
            //                //执行函数
            //                fn.apply(context, args)
            //            },wait)
            //        }
            //
            //    }
            // }

            //节流

            // function throttle(fn,wait) {
            //     let key = true;
            //     return function () {
            //         if(key){
            //           let timer = setTimeout(()=>{
            //               fn.apply(this,arguments)
            //               key = false
            //           },wait)
            //         }
            //     }
            //
            // }

            //手写instanceof

           //  function instanceFun(left,right){
           //
           //      let proto = left.__proto__;
           //      let prototype = right.prototype
           //      console.log(proto,prototype)
           //      while (true){
           //          if(proto == null) return false
           //          if(proto == prototype) return true
           //          proto = proto.__proto__
           //      }
           //
           //  }
           // console.log(instanceFun(null,Object))

            //手写深拷贝

            function deepCopy(val){
               if(typeof val == "object"){
               //引用数据
                   let result = val.constructor == Array?[]:{}
                   for (let i in val){
                      result[i] = typeof val[i] == "object"? deepCopy(val[i]):val[i]
                   }
               }else{
                   //基本数据
                   let result = val
               }
               return result
            }
        },

        methods:{

            autoTextarea(val){
                console.log(val)
            }
        }
    }
</script>

<style lang="less" scoped>
#jscodeStyleId{
  line-height: 35px;
  /*background-color: darkgray;*/
  /*color: white;*/
}
</style>
