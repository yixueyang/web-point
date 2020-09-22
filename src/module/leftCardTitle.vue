<template>
<div id="collectId">
  <div class="collectTitleClass" v-for="(item,index) in collectList" :class="{'focunClickClass':item.keyClass == '1'}" @click="focusNowCollect(item)">
    <div class="circleTop">
      <div style="width: 100%; background-color:#b4bccc ;"></div>
      <div class="rightCircle" style="width: 20px;"></div>
    </div>
    <div>
      {{item.title}}
    </div>
    <div class="circleButton">
      <div style="width: 100%; background-color:#b4bccc ;"></div>
      <div class="rightCircle" style="width: 20px;height: 20px"></div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "leftCardTitle.vue",
        data(){
            return{
                collectList:[
                    {
                        title:"Vue",
                        focusUrl:'vueUrl',
                        keyClass:'1'
                    },
                    {
                        title:"less",
                        focusUrl:'lessUrl',
                        keyClass:'0'
                    },
                    {
                        title:"js",
                        focusUrl:'jsUrl',
                        keyClass:'0'
                    }
                ]
            }
        },
        methods:{
            focusNowCollect(val){
              this.collectList.forEach((item)=>{
                  item.keyClass = '0'
              })
                val.keyClass = '1';
            }
        }
    }
</script>

<style lang="less" scoped>
#collectId{
  width: 100%;
  .collectTitleClass{
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    background-color: #b4bccc;
     .circleTop{
      width: 100%;
      height: 20px;
      display: flex;
      justify-content:space-between;
      .rightCircle{
      }
    }
    .circleButton{
      width: 100%;
      height: 20px;
      display: flex;
      justify-content:space-between;
      .rightCircle{
      }
    }
    &:hover{
      background-color: white;
      .circleTop{
        .rightCircle{
          border-radius:0 0 100% 0;
          background-color:#b4bccc ;
        }

    }
      .circleButton{
        .rightCircle{
          border-radius:0 100% 0 0;
          background-color:#b4bccc ;
        }
      }
    }

  }
  .focunClickClass{
    background-color: white;
    .circleTop{
      .rightCircle{
        border-radius:0 0 100% 0;
        background-color:#b4bccc ;
      }

    }
    .circleButton{
      .rightCircle{
        border-radius:0 100% 0 0;
        background-color:#b4bccc ;
      }
    }
  }
}
</style>
