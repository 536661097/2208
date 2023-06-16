
<template>
    <div>
        <div class="top">
        <input type="text" name="" id="" placeholder="账号">
        <input type="text" name="" id="" placeholder="姓名">
        <el-button type="primary">查询</el-button>
            <el-button type="primary">新增</el-button>
            <el-button>重置</el-button>
        </div>
        <el-table :data="arr" border style="width: 100%;margin-top: 50px;">
        <el-table-column prop="integral" label="序号" >
            <template slot-scope="scope">
            {{scope.$index + 1}}
            </template>
        </el-table-column>
        <el-table-column prop="username" label="账号" >
        </el-table-column>
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="age" label="年龄">
        </el-table-column>
        <el-table-column prop="mobile" label="电话">
        </el-table-column>
        <el-table-column prop="salary" label="薪酬">
        </el-table-column>
        <el-table-column prop="entryDate" label="入职时间">
        </el-table-column>
        <el-table-column prop="address" label="操作" >
            <template slot-scope="scope" >
                <button style="width: 50px;height: 30px;border: 0;">编辑</button>
                <button style="width: 50px;height: 30px;background-color: red;border: 0;margin-left: 5px;color: #fff;">删除</button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
import  {peoplelist} from '../utils/api'
export default {
    name: '',
    components: {},
    data() {
        return {
            arr:[]
        }
    },
    created() { 
        peoplelist().then(res=>{
            console.log(res);
            this.arr=res.data.data.rows
        })
    },
    mounted() { },
    methods: {}
}
</script>
<style scoped lang='scss'>
input {
    margin: 0 10px;
    height: 30px;
}
</style>
