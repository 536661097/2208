import http from './http'
// 登录接口
export const logins=(data)=>http.post('/auth/login',data)
// 侧边栏
// export const aside=()=>http.get('/article/api/category/label/list')
// 列表数据
export const  list=()=>http.post('member/list/search/1/20')
// 供应商管理
export const   gyslist=()=>http.post('supplier/list/search/1/10')
// 商品管理
export   const   shoplist=()=>http.post('goods/list/search/1/10')
//员工管理
export  const    peoplelist=()=>http.post('staff/list/search/1/10')