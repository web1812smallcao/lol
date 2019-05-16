<template>
  <div id="index">
    <div class="navlist">
      <ul class="navul">
        <li class="navli"  v-for="(item,index) in navList" :class="{'activeT':nowIndex===index}" @click="tabClick(index)"><i>{{item.name}}</i>
        </li>
      </ul>
    </div>
    <div class="swiper-container swiper_con" >
        <div class="swiper-wrapper">
            <div class="swiper-slide slide1" @touchstart="ts" @touchend="te({i:0,e:$event})">
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
              <div class="newslist" v-for="(item,i) of newslist">
                <div>
                  <p>{{item.ntitle}}</p>
                  <span>{{item.nfrom}}</span>
                  <span>{{item.num}}评论</span>
                </div>
                <div class="news_img"><img :src="`http://smallcao.applinzi.com/${item.nurl}`"></div>
              </div>
            </div>
            <div class="swiper-slide slide2" @touchstart="ts" @touchend="te({i:1,e:$event})">
              <p><span>正在回放  </span><span>回放单</span></p>
              <div class="video"><video src="http://smallcao.applinzi.com/video/video1.mp4" controls="true" poster="http://smallcao.applinzi.com/img/news10.png"></video></div>
              <div>
                <p><span>今日赛事  </span><span>5场</span></p>
                <div>横向可拖动列表</div>
              </div>
              <div>
                <p>
                  <span>全部赛程</span>
                  <span>赛事视频</span>
                  <span>赛事购票</span>
                  <span>赛况数据</span>
                </p>
              </div>
              <div class="newslist" v-for="(item,i) of newslist">
                  <div>
                    <p>{{item.ntitle}}</p>
                    <span>{{item.nfrom}}</span>
                    <span>{{item.num}}评论</span>
                  </div>
                  <div class="news_img"><img :src="`http://smallcao.applinzi.com/${item.nurl}`"></div>
                </div>
            </div>
            <div class="swiper-slide slide3" @touchstart="ts" @touchend="te({i:2,e:$event})">
              <div class="shop_line">
                <a href="javascript:;"><span class="mui-icon-extra mui-icon-extra-phone"></span><span>专辑</span></a>
                <a href="javascript:;"><span class="mui-icon-extra mui-icon-extra-holiday"></span><span>赛事</span></a>
                <a href="javascript:;"><span class="mui-icon-extra mui-icon-extra-hotel"></span><span>教学</span></a>
                <a href="javascript:;"><span class="mui-icon-extra mui-icon-extra-cold"></span><span>官方</span></a>
              </div>
              <div class="video">
                <video src="http://smallcao.applinzi.com/video/video2.mp4" controls="true" poster="http://smallcao.applinzi.com/img/video_2.jpg"></video>
                <div class="video_t">
                  <div><span>超神解说</span><span>玩法教学</span></div>
                  <div><span class="mui-icon mui-icon-chat">3-</span><span class="mui-icon-extra mui-icon-extra-like">1</span><span class="mui-icon mui-icon-more"></span></div>
                </div>
              </div>
              <div class="video">
                <video src="http://smallcao.applinzi.com/video/video3.mp4" controls="true" poster="http://smallcao.applinzi.com/img/video_3.jpg"></video>
                <div class="video_t">
                    <div><span>超神解说</span><span>玩法教学</span></div>
                    <div><span class="mui-icon mui-icon-chat">3-</span><span class="mui-icon-extra mui-icon-extra-like">1</span><span class="mui-icon mui-icon-more"></span></div>
                  </div>
              </div>
              <div class="video">
                <video src="http://smallcao.applinzi.com/video/video4.mp4" controls="true" poster="http://smallcao.applinzi.com/img/video_4.jpg"></video>
                <div class="video_t">
                    <div><span>超神解说</span><span>玩法教学</span></div>
                    <div><span class="mui-icon mui-icon-chat">3-</span><span class="mui-icon-extra mui-icon-extra-like">1</span><span class="mui-icon mui-icon-more"></span></div>
                  </div>
              </div>
              <div class="video">
                  <video src=""></video>
                  <p><span>超神解说</span><span>玩法教学</span><span>3-</span><span>1</span><span>...</span></p>
                </div>
                <div class="video">
                  <video src=""></video>
                  <p><span>超神解说</span><span>玩法教学</span><span>3-</span><span>1</span><span>...</span></p>
                </div>
                <div class="video">
                  <video src=""></video>
                  <p><span>超神解说</span><span>玩法教学</span><span>3-</span><span>1</span><span>...</span></p>
                </div>
            </div>
            <div class="swiper-slide slide4" @touchstart="ts" @touchend="te({i:3,e:$event})">
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
              <p>专栏</p>
            </div>
            <div class="swiper-slide slide5" @touchstart="ts" @touchend="te({i:4,e:$event})">
              <p>版本</p>
              <p>版本</p>
              <p>版本</p>
              <p>版本</p>
              <p>版本</p>
              <p>版本</p>
              <p>版本</p>
              <p>版本</p>
              <p>版本</p>
              <p>版本</p>
              <p>版本</p>
              <p>版本</p>
              <p>版本</p>
              <p>版本</p>
              <p>版本</p>
              <p>版本</p>
              <p>版本</p>
            </div>
        </div>
    </div>
    <my-footer></my-footer>
  </div>
</template>
<script>
import Swiper from 'swiper-4.5.0'
import myFooter from "@/components/footer.vue"
export default {
     name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            navList:[
                {name:'推荐'},
                {name:'赛事'},
                {name:'视频'},
                {name:'专栏'},
                {name:'版本'}
            ],
            newslist:[],
            nowIndex:0
        }
    },
    mounted() {
        this.mySwiper = new Swiper('.swiper-container',{
            initialSlide:0,//初始化
            autoplay:false,
            keyboardControl:true,//键盘控制
            autoHeight:true,
            observer:true,
            observeParents:true,
            onSlideChangeStart:function(){
                // console.log(that.mySwiper.activeIndex)
                that.nowIndex=that.mySwiper.activeIndex
            }
       })
    }, 
    methods: {
      tabClick(index){
        this.nowIndex = index;
        this.mySwiper.slideTo(index,1000,false);
      },
      ts(e){
        this.startX =  e.touches[0].pageX;
      },
      te(aa){
        var i=aa.i;
        var e=aa.e;
        var moveEndX = e.changedTouches[0].pageX;
        var  X = moveEndX - this.startX;
        if ( X < -50 ) {//左滑
          if(i<4) i++;
          else i=4;

        }else if ( X > 50 ){//右滑
          if(i>0) i--;
          else i=0;
          
        }else{
          console.log(i)
        }
        this.nowIndex=i;
      },
      onload(){
        this.axios.get(
          "http://smallcao.applinzi.com/user/indexNews"
        ).then(res=>{//必须用箭头函数
          //this->当前组件对象
          this.newslist=res.data;
          console.log(this.newslist)
        })
      }
    },
    created(){
      this.onload()
    },
    components:{
      myFooter
    }
}
</script>
<style>
  *{margin:0;padding:0;}
  #index .swiper-slide{height:1300px;}
  #index .navlist{width:100%;height:40px;border-bottom:1px solid rgba(151,151,151,0.1);position:fixed;top:0;background:#f33;z-index:10;}
  #index .navul{width:80%;margin:0 auto;list-style:none;display:flex;justify-content:space-around}
  #index .navli{padding:10px 0px;text-align:center;float:left;}
  #index .navli i{font-style: normal;font-size: 16px;color:#fff;}
  #index .activeT{padding-bottom: .3rem;border-bottom: 2px solid orange;}
  #index .activeT>i{color:orange;}
  #index .swiper_con{width:100%;margin-top:40px;margin-bottom:70px;position:relative;} 
  #index .choosegrand{position:absolute;top:-3;right:0;}
  #index .show{display:block;}
  #index .none{display:none;}

  #index .mint-swipe{height:150px;}
  #index .mint-swipe img{width:100%;}
  #index .mint-swipe-indicator{border:1px solid orange;opacity:0.7;}
  #index .mint-swipe-indicator.is-active{background:orange;border:0;}
  #index .newslist{width:90%;margin:0 auto;border-bottom:1px solid #999;padding:10px 0;display:flex;justify-content: center;text-align: left;}
  #index .newslist:last-child{border:0}
  #index .newslist>div:first-child{width:70%}
  #index .newslist>div:last-child{width:30%}
  #index .newslist p{font-size:16px;color:#000;}
  #index .newslist span{color: #8f8f94;}
  #index .news_img{height:75px;}
  #index .news_img img{width:100%;height:100%;border-radius: 5px;}

  #index .shop_line{width:100%;height:60px;background:#fff;display:flex;justify-content:center;align-items: center;padding:0 5%;}
  #index .shop_line a{color:#000;height:100%;padding-top:11px;}
  #index .shop_line span{font-size:16px;margin:5px;}
  #index .shop_line span:first-of-type{width:30px;height:30px;border:1px solid #000;border-radius:50%;background:orange;color:#fff;padding-top:6px;}
  #index .swiper-slide video{width:90%;border-radius:5px;padding-top:5px;}
  #index .video_t{width:90%;margin:0 auto;display:flex;justify-content:space-between;}
  #index .video_t .mui-icon,#index .video_t .mui-icon-extra{font-size:14px;}
</style>