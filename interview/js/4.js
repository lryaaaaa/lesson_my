//手写map
Array.prototype.map = function(callbackFn,thisArg){//用函数覆盖掉原型链上的map
    // this -> [1,2,3]
    //thisArg 指定callbackFn内部的this指向
    if(this===null||this===undefined){
        throw new TypeError('cannot read proerty map of null or underfined')
    }
    if(Object.prototype.toString.call(callbackFn) != '[object Function]'){//typeof callbackFn != 'function'  也行
        throw new TypeError(callbackFn+'is not a function');
    }
    let O=Object(this);//显式类型转换   确保this调用的一定是对象
    let T=thisArg;
    let len=O.length;
    let A=new Array(len);//跟以前的数组没有影响，全新的内存分配
    for(let k=0;k<len;k++){
        //this[k] 遍历的每一项
        // 下标   this的第三个参数
        if(k in O){
            let kValue=O[k];//拿到每一项
            let mappedValue=callbackFn.call(T,kValue,k,O);
            A[k]=mappedValue
        }
    }
    return A;

}
let  nums=[1,2,3];
let obj={val:5};//map执行的回调函数，指定this
let newNums=nums.map(function(item,index,array){
    return item+index+array[index]+this.val;
},obj)
console.log(newNums);
// Array.prototype.map.call(null);//