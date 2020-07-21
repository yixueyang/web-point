

function forEach(arr,fn){
    for(let i = 0;i<arr.length;i++){
       fn(arr[i])
    }
}
let arr = [1,3,4,5,6,7,8];
forEach(arr,function (val) {
   // console.log(val)
})


//filter
function filter(arr,fn){
    let a = [];
    for(let i = 0;i<arr.length;i++){
        if(fn(arr[i])){
            a.push(arr[i])
        }
    }
    return a
}

//let arr = [1,3,4,5,6,7,8];
filter(arr,function (val) {
   return val%2 == 0
})

//every:检测所有值都满足为true,有一个不满足则为 false
//for of 与for  in 的区别：
// 

function every(arr,fn){
    let result = true
    for(let i = 0;i<arr.length;i++){
    //叽叽写的
    // if(fn(arr[i])){
    //     result ==  true
    // }else{
    //     result = false
    // }
    // }
 
    //另一种老师的写法
    result = fn(arr[i]);
    if(!result){
        break;
    }
  }
  return result
}

//let arr = [1,3,4,5,6,7,8];
every(arr,function(item){
    return item%2 === 0
})

//map

function map(arr,fn){
    let result = [];
    for(let i of arr){
      result.push(fn(arr[i]))
    }
    return result
}

//let arr = [1,3,4,5,6,7,8];
map(arr,function(item){
    return item *item
})

//some:有一个满足条件就返回turn，然后中止遍历；没有满足返回false

function some(arr,fn){
    let result = false;
    for(let i of arr){
        result = fn(arr[i]);
        if(fn(arr[i])){
          break
        }
    }
    return result
}

//let arr = [1,3,4,5,6,7,8];
some(arr,function(item){
    return item %2 == 0
})


//闭包：可以在函数内部返回的函数中，访问到外层的参数
//只调用一次
function once(fn){
    let key = false;
     return function(){
         if(!key){
             key = true;
             return fn.apply(this,arguments)
         }
     }
}

let pay = once(function(money){
  //  console.log('支付'+money+'元')
})

pay(5);
pay(5);
pay(5);
pay(5);

//闭包实现 生成二次方、三次方、n次方的函数
function makePower(power){
    return  function (number){
      return Math.pow(number,power)
    }
}

let power2 = makePower(2) // 1.先调用的是外部函数：power:2次方
const power3 = makePower(3) // 调用的是外部函数：power：3次方


//console.log(power2(3)) //2.调用内部函数 number
//console.log(power3(6)) // number
