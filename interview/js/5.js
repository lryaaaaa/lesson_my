//手写call
//手写时，es6版本比老版本更优雅
Function.prototype.call=function(context,...args){
    context=context || window;
    let fn=Symbol('fn');//返回值 唯一
    //给context动态添加了fn属性
    context.fn=this; //绝对不会不覆盖context上的属性
    let result=eval('context.fn(...args)');
    delete context;// 代码洁癖
    return result;
}
const me = { name: 'Jack' }
function say() {
  console.log(`My name is ${this.name || 'default'}`);
  return 111
}
console.log(say.call(me,1,2,3))