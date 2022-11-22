// const arr=[1,2,3]
// // 末尾添加一个元素
// //返回值为数组的新长度
// Array.prototype.push=function(){
//     //如何得到所有参数
//     //覆盖原有方法
// }
// arr.push(4,5)
const arr = [1,2,3]
// 末尾添加一个元素
// 在 末尾添加多个元素
// 返回值是数组的新长度 
Array.prototype.push = function() {
    // Array.prototype
    // this 面向对象内部， 方法里this 指向实例后的对象 
    // 如何得到所有的参数  [] arguments 
    //console.log(arguments, '???')
    // 覆盖原有方法
    // console.log('---------------')
    for(i=0;i<arguments.length;i++){
      this[this.length]=arguments[i];
    }
    return this.length;
}
arr.push(4, 5, 6)
console.log(arr);

