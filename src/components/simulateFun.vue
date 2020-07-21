<template>
<div>

</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    };
  },
  created(){
    let arr = [1,3,4,5,6,7,8];
    forEach(arr,function (val) {
        console.log(val)
    })
  },
  methods:{
      //forEach
      forEach(arr,fn){
          for(let i = 0;i<arr.length;i++){
             fn(arr[i])
          }
      },

      //filter
      filter(arr,fn){
          let a = [];
          for(let i = 0;i<arr.length;i++){
              i%2 == 0? a.push(arr[i]):''
          }
          return a
      }
  }
};
</script>
<style lang="scss" scoped>
</style>