// let arr=[1,2,3]
// let newArr=arr;//赋值，不是
// newArr[0]=100;
// console.log(arr)


let arr=[1,2,{val:4}];
// let newArr=arr.slice();//浅拷贝  
// newArr[2].val=5;
// console.log(arr);


//深拷贝
//循环引用  内存溢出
//内部的函数不支持序列化，会直接忽略
const newArray= JSON.parse(JSON.stringify(arr));
newArray[2].val=10
console.log(arr);
console.log(newArray)