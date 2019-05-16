<template>
  <div id="details">
    <header>
        <router-link to="/xq4" class="mui-icon mui-icon-back left"></router-link>
        <router-link to="/index" class="mui-icon-extra mui-icon-extra-share right"></router-link>
        <router-link to="/index" class="mui-icon-extra mui-icon-extra-cart right"></router-link>
    </header>
    <div class="bg" :style="this.bg"></div>
    <div class="mask" ref="mask" @touchstart="ts" @touchend="te">
        <p>{{this.list.pname}}</p>
        <span class="mui-icon-extra mui-icon-extra-gold">{{this.list.price1}}&nbsp;&nbsp;</span>
        <span class="mui-icon-extra mui-icon-extra-class">{{this.list.price2}}&nbsp;&nbsp;</span>
        <span class="mui-icon-extra mui-icon-extra-gold">{{this.list.price3}}</span>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import myFooter from "@/components/footer.vue"
  export default {
    props:["pid"],
    data(){
      return {
        list:{pname:""},
        bg:"",
        
      }
    },
    methods: {
       ts(e){
        this.startY =  e.touches[0].pageY;
      },
      te(e){
        var moveEndY = e.changedTouches[0].pageY;
        var  Y = moveEndY - this.startY;
        if ( Y < -50 ) {//上滑
          this.$refs.mask.style.top=0;
          this.$refs.mask.style.transition="all 0.5s";
          console.log(this.$refs.mask.style.top);
        }else if ( Y > 50 ){//下滑
        this.$refs.mask.style.top="60%";
          console.log('下滑')
          
        }else{
          console.log("不滑")
        }
      },
        load(){
        this.axios.get(
          "http://smallcao.applinzi.com/user/details",{
            params:{ pid:this.pid }
          }
        ).then(res=>{//必须用箭头函数
          //this->当前组件对象
          this.list=res.data[0];
          console.log(this.list)
          this.bg='background-image:url('+require('../'+this.list.purl)+')'
          console.log(this.bg)
        })
      }
    },
    created() {
        this.load()
    },
    watch:{//监控
      pid(){//只要lid发生变化就重新发送请求
        this.load();
      }
    },
    components:{
      myFooter
    }
  }
</script>
<style>
*{margin:0;padding:0;}
  #details header{width:100%;height:50px;position:fixed;z-index: 9;top:0;}
  #details header a{line-height:50px;color:orange;}
  #details header .left{float:left;font-size:30px;margin-left:5%;}
  #details header .right{float:right;font-size:24px;margin-right:5%;}
  #details .bg{height:100vh;background-repeat:no-repeat;background-size:290% 88%;
  background-position: 70% 0%;}
  #details .mask{position:fixed;z-index:998;top: 60%;right: 0;
    bottom: 0;left: 0;background-color: rgba(0, 0, 0, .3);}
</style>