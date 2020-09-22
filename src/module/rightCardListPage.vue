<template>
<div id="rightCardList">
  <div>
    <div v-for="item in cardList" class="cardClass" @click.stop.prevent="clickInToNext(item.url)">
      <div style="height: 40px" ><span style="font-size: 30px;font-weight: bold">{{item.title}}</span></div>
        <p>介绍：{{item.introduce}}</p>

    </div>
  </div>

</div>
</template>

<script>
export default {
    name:"rightCardListPage.vue",
  components: {},
  data() {
    return {
        cardList:[
            {
                url:'/HelloWorld',
                title:'Vue数据驱动视图 defineProperty',
                introduce:'艰难看源码ing'
            },
            {
                url:'/newFunAndThis',
                title:'this在对象和构造函数的指向',
                introduce:'悟到一丢丢'
            },
            {
                url:'/newLearnLess',
                title:'如何用less整个特效',
                introduce:'之前我白瞎了less要重新看看啊'
            },
            {
                url:'/handInputJs',
                title:'手写js',
                introduce:'手写js手写js手写js手写js手写js'
            }
        ]
    };
  },
    methods:{
        clickInToNext(val){
            this.$router.push({ path:val})
        }
    }
};
</script>
<style>

</style>
<style lang="less"  scoped>
  #rightCardList{
    .cardClass{
      width:100%;
      height: 100px;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #b4bccc;
      border-radius: 5px;
      cursor: pointer;
    //  box-shadow: 0px 0px 10px #b4bccc;
      .transition(@property:all;@duration:5ms);
        &:hover{
          height:102px;
          box-shadow: 0px 0px 10px #b4bccc;
      }
    }
    .transition(@property:all,@duration:1s,@time-function:linear,@delay:0s){
      -webkit-transition: @arguments;
      -moz-transition: @arguments;
      -ms-transition: @arguments;
      -o-transition: @arguments;
      transition: @arguments;
    }

  }

</style>
