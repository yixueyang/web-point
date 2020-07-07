export class dep{
  constructor(){
    //初始化一个数组，用来存放依赖
    this.sub = []
  }
  //添加
  addSub(val){
    this.sub.push(val)
  }
  depend(){
    if(window.target){
      this.addSub(window.target)
    }
  }
  //删除
  removeSub(val){
    if(this.sub.length){
      let item = this.sub.indexOf(val)
        if(item >-1) {
          this.sub.splice(item, 1)
        }
    }
  }
  //通知更新
  notify(){
    const subs = this.sub.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
     // subs[i].update() 通知更新
    }
  }
}
