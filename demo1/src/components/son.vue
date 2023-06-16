
<template>
<div class="son">
   <h1>我是子组件内容</h1>
   <h1>我的名字是{{ name }}</h1>
   {{ n }}
   <button @click="n">点我n++</button>
</div>
</template>

<script>
export default {
 name: '',
 components: {},
//  props:['name'],
 props:{
    name:{
      type:String,
      default:'黎明',
      require:true
    }
 },
 data () {
 return {
   n:100
 }
 },
 created () { },
 mounted () { },
 methods: {
  n(){
    console.log('我调用了');
    this.n++
  }
 }
}
</script>
<style scoped lang='scss'>
 .son{
    width: 600px;
    height: 300px;
    background-color: green;
 }
</style>
