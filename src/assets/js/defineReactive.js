import {Observer} from "./getNewObject";
import {dep} from "./dep";

export function defineReactive (obj,key,val) {
  // 如果只传了obj和key，那么val = obj[key]
  //arguments.length判断传入的参数个数
  if (arguments.length === 2) {
    val = obj[key]
  }
  //判断传入的是不是object,如果是object就证明还有深层次的对象没有遍历出来，需要重新for一次
  if(typeof val === 'object'){
    new Observer(val)
  }
  let dep = new dep();
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get(){
      console.log(`${key}属性被读取了`);
      dep.depend();
      return val;
    },
    set(newVal){
      if(val === newVal){
        return
      }
      dep.notify()
      console.log(`${key}属性被修改了`);
      val = newVal;
    }
  })
}
