# 闭包
  - 无障碍访问
  - html5的input 新属性
     es6  const let arrow function Promise...
     html5 <!DOCTYPE html>  类型声明
          input readonly  placeholder   type (number,text)  required
          locatstorage.getItem()   setItem...
  - JS 对象->htmL标签
     html标签->对应于JS对象
         html DOM 树（数据结构 ）->JSDOM  对象转化过程
         Object.prototype.toString.call() 得到子类型
         MDN 子类型去查询，就可以看文档办事
  - ajax 流程
     1. 实例化一个xmlhttprequest 对象
            他是拥有js主动发出HTTP请求的能力  数据（前端多次） 单页应用
            http://127.0.0.1:5555/lesson_my/js/closure/1.html 请求的是html ，css，js
            空闲状态  界面（后端控制 1）
     2. xhr.readState 进入 0  状态  unsent
     3. 打开HTTP链接，定义Method URL open()
     4. xhr.readyState  1    OPENED
     5. send()  发送请求
     6. xhr.readyState  2 HEADERS-RECEIVED  服务器端
     7. onreadystatechange  数据到达监听事件
     8. xhr.readState 3 loading 数据到达过程中
     9. xhr.readyState 4 DONE 拿到完整数据
     10. xhr.responseText  数据
  - seach suggest 用户体验优化的功能
     1. 用户完整搜索
       降低用户的使用门槛 （把用户当小白），

  - 异步事件
     1. 事件keyup
        处理函数内部拿到返回数据的时候
          不可以通过return拿，
     2. ajax是异步的，JS主线程会把他放入event loop
         所以res undefined，不等了
     3. 提出方案，使用回调函数，解决异步问题
  - Promise
     1. 解决异步问题而来
        Promise{pending}问题还没有解决 放入event loop
     2. new Promise((resolve,reject)=>{
           resolve(传值)
        })
        p.then(res=>{

        })
        .then会在resolve后运行，res是调用resolve的结果