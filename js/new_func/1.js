var stuA={
    name:'蔡总',

}
var stuB={
    name:'刘总'
}
function sayHi(...args){//es6
    console.log(arguments,...args);
    console.log(`我是${this.name}`)
}
// Object.prototype.sayHi=sayHi;//原型链
// stuA,stuB都能sagyHi


//call  可以手动指定this的指向
// this 指向对象stuA,stuB
sayHi.call(stuB,1,2);
sayHi.apply(stuB,[1,2]);//效果一样
// sayHi.call(stuA);


// stuA.sayHi();//利用原型链实现
// stuB.sayHi();


// satHi.apply(stuB);手动指定this指向


// var func=sayHi.bind(stuB);
// func();