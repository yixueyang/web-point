<template>
    <div>
      <div></div>
      <h3>用less来写transition,实现一下鼠标移入div放大的效果</h3>
      <pre>
          .cardClass{
            width:100%;
            height: 100px;
            .transition(@property:all;@duration:5ms);
              &:hover{
                height:102px; //鼠标移入后高度变高，并添加阴影
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
      </pre>
      <div>
         ①：hover前面一定要加&，不然就只会把特效添加到子元素上<br>
         ②：hover里面写的是鼠标移入后你设想的元素变化后的样式，不写的话会发现transition特效没有作用<br>
         ③：.transition(你要改变的样式，改变的时间，改变时的运动方式，何时触发)，具体参数值可以去官网看看，这里只记录transition在less中写的格式<br>
         ④：可以把.transition的这个函数写在公共less文件中，并引入
      </div>
      <p>全局引入less文件报错时，可以检查一下utils.js有没有 less: generateLoaders('less'),以及webpack.base.confog.js有没有{
         test: /\.less$/,
           loader: "style-loader!css-loader!less-loader",
         }，如果都有的话说明配置重复，去掉webpack.base.confog.js文件里的less配置</p>
    </div>
</template>

<script>
    export default {
        name: "newLearnLess.vue"
    }
</script>

<style scoped>

</style>
