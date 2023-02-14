- 类数组
  - 什么是类数组
        有length属性，可以遍历但是不具备数组的很多方法的对象子类型（比如数组的map方法），Arguments NodeList
        
            有length属性，可以遍历的对象类型，但是它不是真正的数组
            不能调用数组的方法
  - 判断它不是数组：
            Array.isArray() ==> false
            Object.prototype.toString.call()
            对象的子类型
  - 哪些东西是类数组？
       arguments  函数的内置对象  this
  - es6设计箭头函数的原因？
       1. this 增加了代码的复杂性，对其他语言开发者不友好
       2. es6语法的设计的指导原则一 简洁优雅
  - 如何把类数组转成真正的数组？
    可以使用数组的方法
    NodeList div  html  js  runtime  Node   对象
    map  html  字符串数组   .join('')插入页面
    - 遍历一下 {}  push []
        for(let i=0;i<length;i++){

        }
    - 切割 slice
    - Array.from
    - 展开运算符
    - concat + apply
       concat 返回值为数组
  - 如何理解reduce
    1. es6 map 外最高频数组考题api
    2. for of  或技术循环太机械了 命令式编程
    3. map reduce  filter every some  函数式编程
      reduce  
         ((prev,cur)=>{
            return prev+cur
         },0)
    4. 可读性更强
- js判断数组包含某个值
   1. 使用indexOf方法，返回元素在数组中第一次出现的下标，从0开始，否则-1
   2. includes 
      数组中是否存在某个值，存在则为true，无则false（boolean）
   3. find   reduce map
       满足条件的第一个元素的值
   4. findIndex
       返回存在值得下标，无则返回-1
   
    