
<template>
    <div>
        <div class="top">
            <input type="text" name="" id="" placeholder="会员卡号">
            <input type="text" name="" id="" placeholder="会员名字">
            <el-dropdown>
                <el-button type="primary">
                    支付类型<i class="el-icon-arrow-down el-icon--right"></i>
                </el-button>
                <el-dropdown-menu slot="dropdown" v-model="pay">
                    <el-dropdown-item>现金</el-dropdown-item>
                    <el-dropdown-item>银行卡</el-dropdown-item>
                    <el-dropdown-item>支付宝</el-dropdown-item>
                    <el-dropdown-item>微信</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <div class="block">
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
            </div>
            <el-button type="primary">查询</el-button>
            <el-button type="primary">新增</el-button>
            <el-button>重置</el-button>
        </div>
        <!--  -->
         <el-table :data="arr" border style="width: 100%;margin-top: 50px;">
        <el-table-column prop="integral" label="序号"  align="center">
        </el-table-column>
        <el-table-column prop="cardNum" label="会员卡号"  align="center">
        </el-table-column>
        <el-table-column prop="name" label="会员姓名"  align="center">
        </el-table-column>
        <el-table-column prop="birthday" label="会员生日"  align="center">
        </el-table-column>
        <el-table-column prop="phone" label="手机号码"  align="center">
        </el-table-column>
        <el-table-column prop="payType" label="可用积分"  align="center">
        </el-table-column>
        <el-table-column prop="money" label="开卡金额"  align="center">
        </el-table-column>
        <el-table-column prop="pay" label="支付类型"  align="center">
        </el-table-column>
        <el-table-column prop="address" label="会员地址"  align="center">
        </el-table-column>
        <el-table-column prop="address" label="操作"  align="center">
            <template slot-scope="scope" >
                <button style="width: 50px;height: 30px;border: 0;">编辑</button>
                <button style="width: 50px;height: 30px;background-color: red;border: 0;margin-left: 5px;color: #fff;">删除</button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
import {list} from '../utils/api'
export default {
    name: '',
    components: {},
    data() {
        return {
        arr:[],
        pay:'',
        value1:''
        }
    },
    created() {
        list().then(res=>{
            console.log(res);
            this.arr=res.data.data.rows
        })
     },
    mounted() { },
    methods: {}
}
</script>
<style scoped lang='scss'>
.top {
    display: flex;
}

input {
    margin: 0 10px;
}

.el-button {
    margin: 0 15px;
}

</style>
