//手写map
let  nums=[1,2,3];
let obj={val:5};//map执行的回调函数，指定this
let newNums=nums.map(function(item,index,array){
    return item+index+array[index]+this.val;
},obj)
console.log(newNums);