# promise
一 产生的原因
1 解决地狱回调
2 解决信任问题
3 解决捕获错误能力
4 解决多个任务回调后导致多个时间执行顺序，性能消耗过多
二 概念
promise是一个容器，里面包裹着异步操作的代码
从语法上promise是一个对象，从它可以获取异步操作的消息
三 特点
1 有三个状态  pending（进行中） fulfilled（已成功） rejected（已失败）
2 状态的变化只有两种情况
  从进行中到已成功 pending--fulfilled
  从进行中到以失败 pending--rejected
3 状态一旦固定不可改变
四 方法
  .then
  成功的回调
  then方法的返回结果是promise对象，对象状态由回调函数的执行结果决定
  .catch
  失败的回调
  .all
  全选的方法
  传递的参数是一个数组，数组里是调用的promise实例用逗号隔开
  .then 链式调用
  在then方法后可以再跟一个then方法，第二个then的返回值是前一个then return出来的数据
五  原理
底层是根据 new  xmlhttpRequest（）建立网络连接