<template>
    <div id="handInputJs">
      <float_operadiv id="floatLeft" @getPushInput="getPushInputClick"></float_operadiv>
      <div class="handInputClass">
        <js_code_style></js_code_style>
      </div>

    </div>
</template>

<script>
  import js_code_style from '../components/jsCodeStyleCom/jscodeStyle';
  import float_operadiv from '../components/floatOperationCom/floatOperaDiv'
    export default {
        name: "handInputJs",
        components:{js_code_style,float_operadiv},
        data(){
            return{
                getAddParam:[]
            }
        },
        methods:{
            getPushInputClick(val){
             console.log("获取参数",val)
                this.getAddParam = val
            }
        }
    }
</script>

<style lang="less" scoped>
#handInputJs{
  display: flex;
  justify-content: center;
  background-color: #b4bccc;
  #floatLeft{
    position: fixed;
    left: 5px;
    top:15px;
    display: flex;
  }
  .handInputClass{
    width: 50%;
    height: 100%;
    background-color: white;
    padding: 10px;
  }
}
</style>
