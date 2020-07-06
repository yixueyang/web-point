<template xmlns="http://www.w3.org/1999/html">
  <div>
    <div>由一个题引发的思考</div>
    <pre>
      function A() {}
      function B(a) {
          this.a = a;
      }
      function C(a) {
          if (a) {
              this.a = a;
          }
      }
      A.prototype.a = 1;
      B.prototype.a = 1;
      C.prototype.a = 1;

      console.log(new A().a);
      console.log(new B().a);
      console.log(new C(2).a);
    </pre>
    <div>
      看看这个 猜猜 他到底输出啥
      答案是: 1    undefined    2
    </div>
    <div>我刚开始猜的是 undefined 1 2;意料之内的错了hahaha</div>
    <div>
      分析一下原因：
      代码首先执行X.prototype.x = 1,才执行console.log,我自己理解 X.prototype.x = 1 这里类似于一个声明，就像var、let之类的，在执行代码的时候，也是会先执行var、let。
    </div>
    <div>
      到这里就很好理解了，先执行完 prototype后，给A、B、C加上了a的属性，再执行new A/B/C().a,这里就有值的取值，没值的取undefined
    </div>
    <div>接下来 产生一个问题  A.a和A.prototype.a和  function A(a) {this.a = a; }都是给A添加属性，那到底有啥区别啊，来一段代码先</div>
    <pre>
       function B() {
          this.a = 2;
          B.d = 4
      }
      B.b = 1;
      B.prototype.c = 3
      console.log(new B().a,new B().b,new B().c,new B().d)
      console.log(B.a,B.b,B.c,B.d)
      console.dir(B);
      console.dir(new B());
    </pre>
    <div>猜猜结果: <br>
        2 undefined 3 undefined<br>
        undefined 1 undefined 4
    </div>
    <div>
      看到  通过X.x创建的属性只能用X.x来访问，通过创建实例或者prototype创建的属性 只能通过 new X().x访问，这是为啥啊<br>
      这里有一个私有属性和共有属性的区别，像B.b这种  不论是在fun内还是外面，都属于私有属性，不能通过new B()继承到这个属性，那new B()到底继承了什么啊<br>
      查资料 找到了<br>
      new一个实例的时候，会先创建一个空对象，将prototype里的值链接给空对象，就是让 空对象.__proto__ = B.prototype,用console.dir(B)和
      console.dir(new B())打印出的结构如下
    </div>
    <img src="../assets/img/111.png" height="337" width="484"/>
    <div>
      可以看出来 new B()继承了B函数的B.prototype，所以可以通过 new B()取到a和c,而b和d是在B.prototype之外，没有继承，因此取不到，所以我想 b,d就是B函数的私有属性，a,c是公有属性
    </div>
    <div>
      这里存在this指向改变的问题<br>
      创建完空对象后，在调用的时候，this从指向window（全局对象）改变为指向这个空对象
    </div>
  </div>

</template>

<script>
export default {
  components: {},
  data() {
    return {

    };
  },
  created() {
      function B() {
          this.a = 2;
          B.d = 4
          console.log(this)
      }
      B.b = 1;
      B.prototype.c = 3
      console.log(new B().a,new B().b,new B().c,new B().d)//
      console.log( B.a,B.b,B.c,B.d)
      console.dir(B);
      console.dir(new B());
  }
};
</script>
<style lang="less" scoped>
</style>
