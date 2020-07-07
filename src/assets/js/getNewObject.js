import {defineReactive} from "./defineReactive";
import {def} from "./def";

export class Observer{
  constructor(value){
    //获取对象的所有值
    //给对象加标识__ob__,证明是已经添加过set和get属性了
  def(value, '__ob__', this);
   console.log("value",value)
    this.walk(value)
  }
  walk (obj) {
    const keys = Object.keys(obj)//返回枚举对象组成的数组["brand", "price"]
   // console.log("keys",keys)
    for (let i = 0; i < keys.length; i++) {
      //遍历每一个对象，并加上 get、set
      defineReactive(obj, keys[i])
    }
  }
}
