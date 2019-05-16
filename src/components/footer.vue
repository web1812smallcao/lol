<template>
  <div id="my-footer">
      <router-link to="index"><img src="../img/foot_logo1.png"><span>资讯</span></router-link>
      <router-link to="xq2"><img src="../img/foot_logo2.png"><span>盟友</span></router-link>
      <router-link to="xq3"><img src="../img/foot_logo3.png"><span>电视台</span></router-link>
      <router-link to="xq4"><img src="../img/foot_logo2.png"><span>商城</span></router-link>
      <router-link to="xq5"><img src="../img/foot_logo1.png"><span>战绩</span></router-link>
  </div>
</template>
<script>
  //抛出匿名模块对象
  export default {
    data(){
      return {

      }
    }
  }
</script>

<style>
/*定制搜索框的大小*/
#my-footer{
  width:100%;height:70px;background:#fff;display:flex;position:fixed;bottom:0;
  justify-content:space-between;align-items: center;padding:0 5%;z-index:10;
}
#my-footer a{color:#000;height:100%;}
#my-footer img{width:50px;height:50px;}
#my-footer span{display:block;font-size:12px;}
</style>