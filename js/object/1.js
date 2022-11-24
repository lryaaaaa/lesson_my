//对象就是属性和方法的集合
// OOP Object Oriented Programming
let obj={
      name:'小林子',
      sayHi(){
        console.log('hello');
      }
}
obj.name
const xlz=new Object();//js Object 函数也是一切对象的原型
// 一般情况下  对象字面量都基于Object来构造，原型式面向对象
xlz.name='小玲子'
xlz.sayHi=function(){
    console.log('hello');
}
console.log(xlz);