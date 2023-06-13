###### async await
1. 概念：在 JavaScript 中，async/await 是一种异步编程的方法。async/await 使得你可以写出像同步代码一样的异 步代码。在函数前面加上 async 关键字可以将一个函数标记为异步函数，然后使用 await 关键字可以异步地等待一Promise 对象完成，从而使得异步代码的执行效果和同步代码一样。
2. 特点：
 1. async/await更加语义化，async 是“异步”的简写，async function 用于申明一个
 2. function 是异步的； await，可以认为是async wait的简写， 用于等待一个异步方法执行完成；
 3. async/await是一个用同步思维解决异步问题的方案（等结果出来之后，代码才会继续往下执行）
 4. 可以通过多层 async function 的同步写法代替传统的callback嵌套
3. 语法：
 async 语法
1. 自动将常规函数转换成Promise，返回值也是一个Promise对象
2. 只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数
3. 异步函数内部可以使用await
await 语法
1. await 放置在Promise调用之前，await 强制后面点代码等待，直到Promise对象resolve，得到resolve的值作为await表达式的运算结果
2. await只能在async函数内部使用,用在普通函数里就会报错

###### map
1. 概念：在 JavaScript 中，Map 是一种类似于对象的数据结构，它可以将键（key）映射到值（value）。和对象不同的是，Map 中的键可以是任何数据类型，包括原始类型和对象，而不仅仅是字符串。另外，Map 中的键是有序的，这意味着可以通过迭代器按插入顺序访问键值对。
2. 方法：
  .set（key,value） :向map对象中添加一对键值对。
  .get（key） ：获取指定键对应的值。
  .has （key）：判断map对象中是否包含指定键
  .size ： 获取map对象中键值对的数量
  .detele（key）：从map对象中删除指定键的键值对
###### class 类
1. 概念：在 JavaScript 中，class 是一种创建对象的特殊语法糖，它极大地简化了对象的创建过程。class 语法提供了更类似于传统面向对象编程语言的语法，包括类的定义、构造函数、继承等。

es6的class类比es5简便

###### 数组新增方法 
 1. 创建：1 用构造函数创建  2 用字面量创建
2.  方法:
    .add()  向数组中添加元素
    .size   获取数组长度
    .detele() 向数组删除元素
    .clear()  清空数组
    Array.from()  将特殊数组转为普通数组
###### 对象新增方法 
1. 方法：
  Object.assign（a，b，c）  合并对象
  Object.is（a，b） 判断是否为同一个对象 是返回 true  否返回false
