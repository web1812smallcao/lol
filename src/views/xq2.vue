<template>
  <div id="xq2">
    <div class="navlist">
      <ul class="navul">
        <li class="navli"  v-for="(item,index) in navList" :class="{'activeT':nowIndex===index}" @click="tabClick(index)"><i>{{item.name}}</i>
        </li>
      </ul>
    </div>
    <div class="swiper-container swiper_con" >
        <div class="swiper-wrapper">
            <div class="swiper-slide slide1" @touchstart="ts" @touchend="te({i:0,e:$event})">
              <p>当前没有关注的人</p>
            </div>
            <div class="swiper-slide slide2" @touchstart="ts" @touchend="te({i:1,e:$event})">
              <div>
                <p>正在热议</p>
                <a>
                  <span>训练营-周免最强黑科技</span>
                  <span>活动进行中</span>
                  <span>19人已参与</span>
                </a>
                <div>
                  <span>对线的艺术在于秀</span>
                  <span>我的咕咕咕队友</span>
                  <span>撸界黑话大杂烩</span>
                  <span>查看更多话题</span>
                </div>
              </div>
              <select name="order">
                <option>综合排序</option>
                <option>最新发表排序</option>
                <option>只看精华</option>
              </select>
            </div>
            <div class="swiper-slide slide3" @touchstart="ts" @touchend="te({i:2,e:$event})">
              <p>蛋糕萌币</p>
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
    data() {
        return {
            navList:[
                {name:'关注'},
                {name:'推荐'},
                {name:'趣玩'}
            ],
            newslist:[],
            nowIndex:1
        }
    },
    mounted() {
        this.mySwiper = new Swiper('.swiper-container',{
            initialSlide:1,//初始化
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
  #xq2 a{color:#000;}
  #xq2 .swiper-slide{height:1300px;}
  #xq2 .navlist{width:100%;height:40px;border-bottom:1px solid rgba(151,151,151,0.1);position:fixed;top:0;background:#f33;z-index:10;}
  #xq2 .navul{width:80%;margin:0 auto;list-style:none;display:flex;justify-content:space-around}
  #xq2 .navli{padding:10px 0px;text-align:center;float:left;}
  #xq2 .navli i{font-style: normal;font-size: 16px;color:#fff;}
  #xq2 .activeT{padding-bottom: .3rem;border-bottom: 2px solid orange;}
  #xq2 .activeT>i{color:orange;}
  #xq2 .swiper_con{width:100%;margin-top:40px;margin-bottom:70px;position:relative;} 
  #xq2 .choosegrand{position:absolute;top:-3;right:0;}
  #xq2 .show{display:block;}
  #xq2 .none{display:none;}
</style>