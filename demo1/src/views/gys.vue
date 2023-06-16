
<template>
    <div>
        <div class="top">
        <input type="text" name="" id="" placeholder="供应商名称">
        <input type="text" name="" id="" placeholder="联系人">
        <input type="text" name="" id="" placeholder="联系电话">
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
        <el-table-column prop="name" label="供应商名称" >
        </el-table-column>
        <el-table-column prop="linkman" label="联系人">
        </el-table-column>
        <el-table-column prop="mobile" label="联系电话">
        </el-table-column>
        <el-table-column prop="remark" label="备注">
        </el-table-column>
        <el-table-column prop="address" label="操作">
            <template slot-scope="scope" >
                <button style="width: 50px;height: 30px;border: 0;">编辑</button>
                <button style="width: 50px;height: 30px;background-color: red;border: 0;margin-left: 5px;color: #fff;">删除</button>
            </template>
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
import { gyslist } from '../utils/api';
export default {
    name: '',
    components: {},
    data() {
        return {
          arr:[]
        }
    },
    created() {
        gyslist().then(res=>{
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
