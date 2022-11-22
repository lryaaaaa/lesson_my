# JS考试重点之手写代码

- push 
数组的功能？
  哪两种数据结构的什么操作？
   线性和非线性
    []或链表    队列FIFO/栈filo
    {value: 1, next:}
    数组：[1,2,3]  初始地址，arr[0]arr[1]arr[2]
     数组在内存中的储存是连续的
     物理地址     arr[i]= &arr(起始地址)+(i-1)*2

     链表是不连续的。在内存使用更为灵活


  - js和其他语言不同的地方
    原型的概念  prototype
    [1,2,3](实例)   Array(类)
    1. 声明数组  在js 里有多种方法
    [1,2,3]   new Array(1,2,3)
    2. 数组对象实例添加一个共有的方法
      js里面，Array类prototype对象 添加自定义的push2
      Array.prototype.push2=
      function(){

      }
      arr.push2();