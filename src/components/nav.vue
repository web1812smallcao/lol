<template>
	<div class="navbar">
			<router-link  to="/index" >推荐</router-link>
			<router-link  to="/ym2">赛事</router-link>
			<router-link  to="/ym3">视频</router-link>
      <router-link  to="/ym4">专栏</router-link>
			<router-link  to="/ym5">版本</router-link>
  </div>
</template>
<script>
  //抛出匿名模块对象
  export default {
    data(){
      return {

      }
    },
    methods: {

    }
  }
</script>

<style>
/*定制搜索框的大小*/
.navbar{width:100%;height:70px;background:#f00;position:fixed;top:0;display:flex;justify-content:space-around;align-items: center;padding:0 5%;}
.navbar a{color:#fff;text-decoration:none;}
</style>