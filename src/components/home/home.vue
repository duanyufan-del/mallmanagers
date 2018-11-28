<template>
    <el-container class="container">
  <el-header class='header'>
      <el-row>
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <img src="../../assets/logo.png" alt="图片无法显示">
            </div>
        </el-col>
        <el-col :span="8" class="middle">
            <div class="grid-content bg-purple-light">
                <h3>电商后台管理系统</h3>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple">
                <a href="" @click.prevent='handleloginout()' class="loginout">退出</a>
            </div>
        </el-col>
      </el-row>
  </el-header>
  <!-- 中间部分 -->
  <el-container>
    <el-aside width="200px" class="aside">
              <el-menu default-active="2" class="el-menu-vertical-demo" :unique-opened='true'>
      <!-- 1 -->
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
          <el-menu-item index="1-1">
              <template slot="title">
           <i class="el-icon-menu"></i>
          <span>用户列表</span>
              </template>
     </el-menu-item>
      </el-submenu>
        <!-- 2 -->
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
          <el-menu-item index="1-1">
              <template slot="title">
          <i class="el-icon-menu"></i>
          <span>角色列表</span>
              </template>
     </el-menu-item>
      <el-menu-item index="1-2">
              <template slot="title">
          <i class="el-icon-menu"></i>
          <span>权限列表</span>
              </template>
     </el-menu-item>
      </el-submenu>
            <!-- 3 -->
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
          <el-menu-item index="1-1">
              <template slot="title">
          <i class="el-icon-menu"></i>
          <span>商品列表</span>
              </template>
     </el-menu-item>
      <el-menu-item index="1-2">
              <template slot="title">
          <i class="el-icon-menu"></i>
          <span>分类参数</span>
              </template>
     </el-menu-item>
      <el-menu-item index="1-3">
              <template slot="title">
          <i class="el-icon-menu"></i>
          <span>商品分类</span>
              </template>
     </el-menu-item>
      </el-submenu>
      <!-- 4 -->
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
          <el-menu-item index="1-1">
              <template slot="title">
           <i class="el-icon-menu"></i>
          <span>订单列表</span>
              </template>
     </el-menu-item>
      </el-submenu>
       <!-- 5 -->
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据统计</span>
        </template>
          <el-menu-item index="1-1">
              <template slot="title">
           <i class="el-icon-menu"></i>
          <span>数据报表</span>
              </template>
     </el-menu-item>
      </el-submenu>
    </el-menu>
    </el-aside>
    <el-main class="main">Main</el-main>
  </el-container>
</el-container>
</template>

<script>
export default {
    beforeCreate(){
        const token=localStorage.getItem('token')
        //没有token值 即没有登录
        if(!token){
            this.$router.push({name:'login'})
        }
    },
    methods:{
        handleloginout(){
              this.$message.success('退出成功');
              //清除token值
              localStorage.clear();
              //回到登录页
              this.$router.push({name:'login'})
        }
    }
};
</script>

<style>
.container {
  height: 100%;
}
.header {
  background-color: #b3c0d1;
}
.aside {
  background-color: #d3dce6;
}
.container {
  background-color: #e9eef3;
}
.middle {
  text-align: center;
  color: white;
}
.loginout {
  text-decoration: none;
  line-height: 60px;
  margin-left: 400px;
}
</style>
