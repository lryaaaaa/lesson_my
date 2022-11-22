//pop   数组末尾 输出一个数
const arr=[1,2,3];
// console.log(arr.pop());
// console.log(arr);
Array.prototype.pop=function(){
    // 拿到最后一个元素
    let temp= this[this.length-1];
    //数组长度减一
    this.length--;
    // delete this[this.length-1];

    // console.log('flag')

    return temp;
}
console.log(arr.pop());

console.log(arr);

