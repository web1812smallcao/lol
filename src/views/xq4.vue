<template>
  <div id="details">
    <my-header></my-header>
    <h1>商城</h1>
    <mt-swipe :auto="4000">
      <mt-swipe-item>
          <img src="../img/banner1.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="../img/banner2.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="../img/banner3.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="../img/banner4.jpg">
      </mt-swipe-item>
    </mt-swipe>
    <div class="shop_line">
        <a href="javascript:;"><span class="mui-icon-extra mui-icon-extra-phone"></span><span>英雄</span></a>
        <a href="javascript:;"><span class="mui-icon-extra mui-icon-extra-holiday"></span><span>皮肤</span></a>
        <a href="javascript:;"><span class="mui-icon-extra mui-icon-extra-hotel"></span><span>守卫/图标</span></a>
        <a href="javascript:;"><span class="mui-icon-extra mui-icon-extra-cold"></span><span>礼包</span></a>
        <a href="javascript:;"><span class="mui-icon-extra mui-icon-extra-cate"></span><span>周边</span></a>
    </div>
    <hr>
    <p class="title">
      <span>最新上架</span>
      <a href="javascript:;"><span>全部</span><span class="mui-icon mui-icon-forward"></span></a>
    </p>
    <div class="shop_part1">
      <a href="javascript:;"><span class="mui-icon-extra mui-icon-extra-gold">13720</span><span>苍穹之光 布兰德 炫彩皮肤</span></a>
      <div>
        <a href="javascript:;"><span class="mui-icon-extra mui-icon-extra-gold">9900</span><span>千纸双子 努努...</span></a>
        <a href="javascript:;"><span class="mui-icon-extra mui-icon-extra-gold">7900</span><span>千纸凤凰 艾尼...</span></a>
      </div>
    </div>
    <hr>
    <p>推荐英雄</p>
    <div class="shop_part2">
      <div class="part1" v-for="(hero,i) in heros" :key="i" :style="`background-image:url(${require('../'+hero.purl)})`">
        <router-link :to="`/details/h${hero.pid}`">
          <span>{{hero.pname}}</span>
          <div>
            <span class="mui-icon-extra mui-icon-extra-gold">{{hero.price1}}&nbsp;&nbsp;</span>
            <span class="mui-icon-extra mui-icon-extra-class">{{hero.price2}}</span>
          </div>
          <span>版本强势</span>
        </router-link>
      
      </div>
    </div>
    <hr>
    <p>推荐皮肤</p>
    <div class="shop_part2">
      <div class="part4" v-for="(skin,i) in skins" :key="i" :style="`background-image:url(${require('../'+skin.purl)})`">
        <router-link :to="`/details/s${skin.pid}`">
          <span>{{skin.pname}}</span>
          <span class="mui-icon-extra mui-icon-extra-gold">6900</span>
        </router-link>
      </div>
    </div>
    <div class="shop_part3"></div>
    <hr>
    <p>周边推荐</p>
    <div class="zhanwei"></div>
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
        heros:[],
        skins:[],
        bg:''
      }
    },
    methods: {
      load(){
        this.axios.get(
          "http://smallcao.applinzi.com/user/products"
        ).then(res=>{//必须用箭头函数
          //this->当前组件对象
          this.heros=res.data.heros;
          this.skins=res.data.skins;
          console.log(this.skins)
        })
      }
    },
    created() {
      this.load()
    },
    components:{
      myHeader,
      myFooter
    }
  }
</script>
<style>
#details .zhanwei{height:70px;}
#details p{text-align:left;margin-left:6%;color:#000;}
#details a{text-decoration:none;}
#details span{font-size:14px;color:#000;}
#my-footer>a>span{font-size:12px;}

#details .mint-swipe{height:150px;}
#details .mint-swipe img{width:100%;}
#details .mint-swipe-indicator{border:1px solid orange;opacity:0.7;}
#details .mint-swipe-indicator.is-active{background:orange;border:0;}
#details .shop_line{
  width:100%;height:80px;background:#fff;display:flex;
  justify-content:space-between;align-items: center;padding:0 5%;
}
#details .shop_line a{color:#000;height:100%;padding-top:11px;}
#details .shop_line span{display:block;font-size:16px;margin:5px auto;}
#details .shop_line span:first-of-type{width:30px;height:30px;border:1px solid #000;border-radius:50%;background:orange;color:#fff;padding-top:6px;}

#details .title{display:flex;justify-content: space-between;}
#details .shop_part1{width:100%;height:170px;display:flex;justify-content:center;padding:5px;}
#details .shop_part1 a{border-radius:5px;}
#details .shop_part1 span{font-size:10px;color:orange;margin-left:5px;}
#details .shop_part1 a>span:last-child{color:#fff;}
#details .shop_part1>a{width:60%;height:100%;background:url(../img/shop1.jpg) no-repeat 50% 0%;background-size:240% 170%;   display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start}
#details .shop_part1>div{width:30%;display:flex;flex-direction:column;padding:0 5px;}
#details .shop_part1>div>a{width:100%;height:50%;background:url(../img/shop2.jpg) no-repeat 50% 0%;background-size:120% 100%;display:flex;flex-direction:column;justify-content:flex-end;align-items:flex-start;}
#details .shop_part1>div>a:last-child{background:url(../img/shop3.jpg) no-repeat 50% 0%;background-size:120% 100%;margin-top:5px;}

#details .shop_part2>div{height:110px;width:90%;margin:10px auto;background-position:50% 0%;background-size:130% 180%;}
#details .shop_part2>div>a{width:100%;height:100%;border-radius:5px;display:flex;
flex-direction:column;justify-content:center;align-items:flex-start;}

#details .shop_part2>div>a span{color:orange;font-size:14px;margin-left:10px;}
#details .shop_part2>div>a span:first-child{font-size:16px;}
#details .shop_part2>div>a>span:nth-child(3){font-size:12px;color:#0aa1ed;}
#details .mui-icon-extra-class:before{color:#0aa1ed}
</style>