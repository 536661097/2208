
<template>
<div>
  <el-container>
  <el-header>
  <h2>梦学谷会员管理系统</h2>
  <div>苏丽 ↓</div>
  </el-header>
  <el-container>
    <el-aside width="200px">
      <el-menu
        router
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="/index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/vip">
        <i class="el-icon-menu"></i>
        <span slot="title">会员管理</span>
      </el-menu-item>
      <el-menu-item index="/gys">
        <i class="el-icon-menu"></i>
        <span slot="title">供应商管理</span>
      </el-menu-item>
      <el-menu-item index="/shop">
        <i class="el-icon-menu"></i>
        <span slot="title">商品管理</span>
      </el-menu-item>
      <el-menu-item index="/people">
        <i class="el-icon-menu"></i>
        <span slot="title">员工管理</span>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
// import {aside} from '../utils/api'
export default {
 name: '',
 components: {},
 data () {
 return {
 }
 },
 created () {
  //  aside().then(res=>{
  //   console.log(res);
  //  })
 },
 mounted () { },
 methods: {
  btn(){
    console.log(this.$refs);
    // this.$refs.lm.name='爸爸'
    //  this.$refs.lm.n()
    //  console.log(this.$attrs);
  }
 }
}
</script>
<style scoped lang='scss'>
 .el-header{
  width: 100%;
  height: 50px;
  background-color: #2d3a4b;
  display: flex;
  justify-content: space-between;
  color: #fff;
  line-height: 50px;
 }
 .el-aside{
  height: 1000px;
  width: 200px;
  background-color: #545c64;
 }
</style>
