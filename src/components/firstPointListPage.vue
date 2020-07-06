<template>
<div id="firstPointPage">
  <div>
    <div class="cardClass" @click.stop.prevent="clickInToNext('/HelloWorld')">
      <div ><span style="font-size: 30px;font-weight: bold">Vue数据驱动视图 defineProperty</span></div>
      <div>
        <p>介绍：</p>
      </div>
    </div>
    <div class="cardClass" @click.stop.prevent="clickInToNext('/newFunAndThis')">
      <div ><span style="font-size: 30px;font-weight: bold">this在对象和构造函数的指向</span></div>
      <div>
        <p>介绍：</p>
      </div>
    </div>
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
    methods:{
        clickInToNext(val){
            this.$router.push({ path:val})
        }
    }
};
</script>
<style lang="less"  scoped>
  #firstPointPage{
    .cardClass{
      width:100%;
      height: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border: 1px solid #b4bccc;
      border-radius: 5px;
      cursor: pointer;
      box-shadow: 0px 0px 10px #b4bccc;
      /*transition-property:width,height;*/
      /*transition-duration: 2s;*/
      /*transition-timing-function: linear*/
      transition:width,height 2s;
    }
  }

</style>
