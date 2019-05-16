<template>
  <div id="login_2">
      <header>
        <router-link to="/login_1" class="mui-icon mui-icon-back back">返回</router-link>
        <span>QQ登录</span> 
      </header>
      <section>
        <img src="../img/login_2-2.jpg">
        <form>
          <input type="text" placeholder="请输入用户名" v-model="name"> 
          <input type="password" placeholder="请输入密码" v-model="pwd">
          <button @click="btnLogin">登录</button>
        </form>
      </section>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        name:"",
        pwd:""
      }
    },
    methods: {
      btnLogin(e){
              e.preventDefault();
                var u = this.name;
                var p = this.pwd;
                console.log("2:"+u+":"+p);
                var ureg = /^[a-z0-9_]{3,8}$/;
                if(!ureg.test(u)){
                  this.$toast("用户名格式不正确，请检查");
                    return;
                }
                var preg = /^[0-9]{3,8}$/;
                if(!preg.test(p)){
                    this.$toast("密码格式不正确");
                    return;
                }
                this.axios.get(
                "http://127.0.0.1:3000/user/login?name="+u+"&pwd="+p).then((res)=>{
                    if(res.data.code==1){
                      this.$router.push("/index")
                    }
                    else Toast("登录失败")
                })
            }
    },
    components:{
    }
  }
</script>
<style scoped>
  *{margin:0;padding:0;}
  #login_2 header{height:50px;background-image:-webkit-linear-gradient(right,#27b1f6 0%, #0aa1ed 100%)}
  #login_2 header .back{float:left;line-height:50px;color:#fff;font-size:16px;}
  #login_2 header span{line-height:50px;text-align:center;color:#fff;
  margin-left:-10%;} 
  #login_2 section>img{width:100%;height:100%;margin:5% 0;}
  #login_2 form button{width:100%;height:40px;background-image:-webkit-linear-gradient(right,#27b1f6 0%, #0aa1ed 100%)}
</style>