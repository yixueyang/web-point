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
  display: flex;
  .leftCardClass{
    width: 30%;
    border-right: 1px solid #b4bccc;
    margin-right: 15px;
    padding: 10px;
  }
  .rightCardClass{
    width: 70%;
  }
}
</style>
