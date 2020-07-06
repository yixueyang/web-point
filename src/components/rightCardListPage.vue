<template>
<div id="rightCardList">
  <div>
    <div v-for="item in cardList" class="cardClass" @click.stop.prevent="clickInToNext(item.url)">
      <div ><span style="font-size: 30px;font-weight: bold">{{item.title}}</span></div>
      <div>
        <p>介绍：{{item.introduce}}</p>
      </div>
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
<style lang="less"  scoped>
  #rightCardList{

    .cardClass{
      width:100%;
      height: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #b4bccc;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: 0px 0px 10px #b4bccc;
      .transition(width,3s,linear,0);
    }
    .transition(@pro,@dur,@fn,@delay){
      -webkit-transition-property: @pro;
      -moz-transition-property: @pro;
      -o-transition-property: @pro;
      transition-property: @pro;

      -webkit-transition-duration: @dur;
      -moz-transition-duration: @dur;
      -o-transition-duration: @dur;
      transition-duration: @dur;

      -webkit-transition-timing-function: @fn;
      -moz-transition-timing-function: @fn;
      -o-transition-timing-function:@fn;
      transition-timing-function: @fn;

      -webkit-transition-delay: @delay;
      -moz-transition-delay: @delay;
      -o-transition-delay: @delay;
      transition-delay: @delay;
    }

  }

</style>
