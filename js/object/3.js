//生成对象
//  猫这个类的模板
// var Cat={
//      name:'',
//      color:''
// }
// //原始模式  基于 new Object
// var cat1={};
// cat1.name='';
// cat1.color='';

function Cat(name,color){
    this.name=name;
    this.color=color;
}
//new  实例化
var cat3=new Cat('三毛','灰');
var cat4=new Cat('三毛','灰');
console.log(cat3)
//cat3.__proto__==cat4.__proto__
// cat3 instanceof Cat