<template>
  <div>
    <my-header></my-header>
    <h1>战绩</h1>
    <my-footer></my-footer>
  </div>
</template>
<script>
  //1. 先引入header.vue组件对象，临时命名为myHeader，将来组件标签就是<my-header>
  import myHeader from "@/components/header.vue"
  import myFooter from "@/components/footer.vue"
  export default {
    data(){
      return {
        
      }
    },
    components:{
      myHeader,
      myFooter
    }
  }
</script>
<style>
</style>