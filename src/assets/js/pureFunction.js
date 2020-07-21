//纯函数的优势

//1.可缓存：eg:lodash中的memoize（记忆函数）

//由于传入同样的参数可以返回相同的结果，返回结果放在缓存中，等待下次读取

const _ = require("lodash");

function aAddb(r){
    return Math.PI*r*r
}

// let addFun = _.memoize(aAddb);

// console.log(addFun(1,2))
// console.log(addFun(1,2))
// console.log(addFun(1,2))
 //只调用了一次  console.log(a,b)，后面直接求值


 //手写一个记忆函数

 function memoize(fn){
     let cache = {}
     return function(){
       let key = JSON.stringify(arguments)
     //  cache[key] = cache[key] || fn.apply(fn.arguments)
     }
 }

 let addFun = memoize(aAddb);

console.log(addFun(1,2))
console.log(addFun(1,2))
console.log(addFun(1,2))

//lodash里的函数柯里化_.curry
//柯里化：把多参数的函数转换为一元函数
//内部通过闭包 对传入函数的数据进行了缓存
function getSum(a,b,c){
    return a+b+c

}

//const curried = _.curry(getSum)
const curried = curry(getSum)
console.log(curried(1,2,3))
console.log(curried(1)(2,3))
console.log(curried(1,2)(3))

//手动模拟一个curry函数
function curry(func){
    return function curriedFn (...args){
        //对比实参个数是否和形参个数相同
        //实参<形参:重新在调一次curriedFn，闭包，对数据进行缓存
        if(args.length<func.length){
             return function(){
                return curriedFn(... args.concat(Array.from(arguments)))
 
             }
        }
        return func(...args)
    }
}

//第一次传递的参数 ...args
//第二次传参时需要判断  第一次传参加第二次传参的个数是否和形参一样，
//Array.from(arguments):将 arguments伪数组转换为真数组
//args.concat把args和新传入的arguments连接在一起
//...将合成的数组展开依次传入


//组合函数，将多个函数组合在一起：

//模拟组合函数

const reverse =arr => arr.reverse();
const firse = arr=>arr[0];
const toUpper = s => s.toUpperCase()

const f = compose(toUpper,firse,reverse)

console.log(f(['one','two','three']))

function compose(...args){
    return function(value){
        return args.reverse().reduce(function(acc,fn){
            return fn(acc)
        },value)
    }
}

//reduce:将上一个执行完的返回值，作为参数传入下一个方法中
//},value):设置acc初始值

//箭头函数改写

const compose = (...args)=> value => args.reverse().reduce((acc,fn) => fn(acc),value)