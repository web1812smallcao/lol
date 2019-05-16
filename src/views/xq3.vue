<template>
  <div>
    <my-header></my-header>
    <h1>电视台</h1>
    <div id="slider" class="mui-slider" >
			<div class="mui-slider-group mui-slider-loop">
				<!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#">
						<img src="../img/banner4.jpg">
					</a>
				</div>
				<!-- 第一张 -->
				<div class="mui-slider-item">
					<a href="#">
						<img src="../img/banner1.jpg">
					</a>
				</div>
				<!-- 第二张 -->
				<div class="mui-slider-item">
					<a href="#">
						<img src="../img/banner2.jpg">
					</a>
				</div>
				<!-- 第三张 -->
				<div class="mui-slider-item">
					<a href="#">
						<img src="../img/banner3.jpg">
					</a>
				</div>
				<!-- 第四张 -->
				<div class="mui-slider-item">
					<a href="#">
						<img src="../img/banner4.jpg">
					</a>
				</div>
				<!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
				<div class="mui-slider-item mui-slider-item-duplicate">
					<a href="#">
						<img src="../img/banner1.jpg">
					</a>
				</div>
			</div>
			<div class="mui-slider-indicator">
				<div class="mui-indicator mui-active"></div>
				<div class="mui-indicator"></div>
				<div class="mui-indicator"></div>
				<div class="mui-indicator"></div>
			</div>
		</div>
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