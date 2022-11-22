// 数组的优势是：以O（1）的时间访问到第i个元素
const arr=[1,2,3];
// arr.push(4);
// console.log(arr);
// console.log(arr.push);
// arr.push();
// 如何在arr上添加
Array.prototype.push2=function(num){
    //arr[1,2,3,4]
//    console.log('----') 
    this[this.length]=num;
    return this.length;//返回值
}
arr.push2(4);
console.log(arr);
// const arr1=new Array(1,2,3);
// console.log(arr1);
