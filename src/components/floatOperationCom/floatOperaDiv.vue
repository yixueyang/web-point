<template>
    <div id="floatOperationId">
        <div class="clickFan" @click="addInputDom(0)">
          <svg class="icon iconFan" aria-hidden="true">
            <use xlink:href="#iconfan"></use>
          </svg>
        </div>
        <div v-if="hideImg" @click="addInputDom(1)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconjitui"></use>
          </svg>
        </div>
        <div v-if="hideImg" @click="addInputDom(2)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconfantuan"></use>
          </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "floatOperaDiv",
        data(){
            return{
                pushInput:[],
                hideImg:false
            }
        },
        methods:{
            addInputDom(val){
                console.log(val)
          if(val == 0){
              this.hideImg = !this.hideImg
          }
              this.pushInput.push(val);
              this.$emit("getPushInput",this.pushInput)
            },
        }
    }
</script>

<style lang="less" scoped>
#floatOperationId{
  display: flex;
  height: 40px;

  /*.clickFan{*/
  /*     .iconFan{*/
  /*       & :hover{*/
  /*         -webkit-transform:rotate(180deg);*/
  /*         transform:rotate(180deg);*/
  /*         transform-origin: center center;*/
  /*         -webkit-transform-origin: center center;*/
  /*         -webkit-transition:-webkit-transform 1s linear;*/
  /*         transition:transform 1s linear;*/
  /*       }*/

  /*     }*/
  /*}*/
  .hideFan{
    display: flex;
  }
}
</style>
