<template>
  <div id="login">
    <img src="../img/logo.png">
    <form>
      <button type="button" @click="login"><img src="../img/login_logo.jpg"></button>
      <div class="check">
        <input id="btn" type="checkbox" :checked="chb" @click="choose"><label for="btn">我已阅读并同意<span>腾讯游戏用户协议</span>和<span>隐私政策</span></label>
      </div> 
    </form>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        chb:false
      }
    },
    methods: {
      login(){
        if(!this.chb){
          this.$toast("请先同意用户协议")
          return
        }else{
          this.$router.push("/login_2")
        }
      },
      choose(e){
        this.chb=e.target.checked;
      }
    },
    components:{
    }
  }
</script>

<style scoped>
  *{margin:0;padding:0;}
  #login{width:100%;background-image: url(../img/login3_1.jpg);background-size:100% 100%;padding-bottom:5%;}
  #login>img{width:50%;height:15%;margin-top:60%;}
  #login>form{margin-top:20%;}
  #login>form>button{width:60%;height:10%;border:0;}
  #login>form>button>img{width:100%;height:100%;}
  #login .check{margin-top:5%;margin-bottom:5%;position: relative;}
  #login .check input{position:absolute;left:16%;top:25%;}
  #login .check label{font-size:12px;transform: scale(0.8)}
</style>