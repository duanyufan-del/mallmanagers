<template>

   <div class="login-wrap">
       
    <el-form class='login-form' label-position="top" label-width="80px" :model="formdata">
  <h2>用户登录</h2>
  <el-form-item label="用户名">
    <el-input v-model="formdata.username"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input v-model="formdata.password"></el-input>
  </el-form-item>
  <el-button class='login-button' type="primary" @click.prevent='handelLogin()'>登录</el-button>
</el-form>
   </div>
</template>

<script>

export default {
  data () {
    return {
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods:{
    //发送axios请求
    async handelLogin(){
      const res=await this.$http.post('login',this.formdata)
      //------
          const{data,meta:{msg,status}}=res.data
          if(status===200){
            //跳转到首页home
           localStorage.setItem('token',data.token)
            this.$router.push({name:'home'})
            //提示登录成功
              this.$message.success(msg);
          }
          else{
             this.$message.error(msg);
          }
    
    }
  }
}
</script>

<style>
.login-wrap{
    height: 100%;
    background-color: #324152;
    display: flex;
    justify-content: center;
    align-items: center
}
.login-wrap .login-form{
    border-radius: 5px;
    width: 400px;
    background-color: #fff;
    padding:30px;
}
.login-wrap .login-button{
    width: 100%
}
</style>
