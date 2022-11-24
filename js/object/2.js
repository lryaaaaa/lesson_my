//构造函数
//js 没有class，不是传统的面向对象OOP
//constructor
//js  function 代替class 类的封装
function Person(name,age){
   this.name=name;
   this.age=age;
}
//实例化的过程
const xlz=new Person('小玲子',16);
console.log(xlz)