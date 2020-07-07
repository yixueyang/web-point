<template>
<div id="firstPointPage">
  <leftCardTitle class="leftCardClass"></leftCardTitle>
  <rightCardListPage class="rightCardClass"></rightCardListPage>
</div>
</template>

<script>
  import leftCardTitle from './leftCardTitle'
  import rightCardListPage from './rightCardListPage'
    export default {
        name: "firstPointListPage.vue",
        components:{
            leftCardTitle,
            rightCardListPage
        }
    }
</script>

<style lang="less" scoped>
#firstPointPage{
  height: 100%;
  display: flex;
  .leftCardClass{
    width: 30%;
    height: 100%;
    margin-right: 15px;
    background-color:#b4bccc ;
  }
  .rightCardClass{
    width: 70%;
  }
}
</style>
