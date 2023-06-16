
<template>
    <div>
        <div class="box">
          <h2>梦学谷会员管理系统</h2>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="账号" prop="mobile">
    <el-input type="password" v-model="ruleForm.mobile" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="code">
    <el-input type="password" v-model="ruleForm.code" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="gohome">登录</el-button>
  </el-form-item>
</el-form>
        </div>
    </div>
</template>

<script>
import { logins } from '../utils/api';
export default {
    name: '',
    components: {},
    data() {
        return {
            ruleForm:{
                mobile:'',
                code:''
            },
          rules:{
             mobile:[{required: true, message: '请输入账号', trigger: 'blur'}],
             code:[{required: true, message: '请输入密码', trigger: 'blur'}]
          }
        }
    },
    created() { },
    mounted() { },
    methods: {
      gohome(){
       logins(this.ruleForm).then(res=>{
         console.log(res);
         localStorage.setItem('token',res.data.data.access_token)
         this.$message({
          message: '登陆成功',
          type: 'success'
        });
        this.$router.push('/')
       })
      }
    }
}
</script>
<style scoped lang='scss'>
.box {
    width: 400px;
    height: 300px;
    background-color: #cecfd7;
    border-radius: 15px;
    margin: 100px auto;
    text-align: center;
    padding-top: 20px;
    h2{
        margin-bottom: 20px;
    }
}
.el-input{
    width: 250px;
}
button{
    margin-left: -180px;
}
</style>
