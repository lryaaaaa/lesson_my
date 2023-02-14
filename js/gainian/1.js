function  sum(a,b){
    // //es6
    // let args=Array.from(arguments);

    //展开运算符
    let args=[...arguments];

    
    //借用数组的slice方法
    // let args=Array.prototype.slice.call(arguments);
    // console.log(Array.prototype.toString.call(arguments,args));
}
sum(1,2)