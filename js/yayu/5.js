var propValue=function(obj){
    return obj.value
}
var add = function(a, b, c) {
    return a + b + c
  }
var memorize = function(func, hasher) {
    var memoize = function(key){
        var cache = memoize.cache;
        var address = '' + (hasher ? hasher.apply(this, arguments) : key);
        if (!cache[address]) {
            cache[address] = func.apply(this, arguments);
        }
        return cache[address]; 
    };
    //cache挂载在函数对象上
    memoize.cache = {};
    return memoize;
};

var memoizedAdd=memorize(add,function(){//用一个自定义函数将要传的值切割成数组 用JSON.stringify
    var args=Array.prototype.slice.call(arguments);// var args= Array.prototype.join.call(arguments,",");
    return JSON.stringify(args)
});//如果是字符串，第二个传JSON.stringify  hasher值
// Array.prototype.join.call  不行  没有返回值
console.log(memoizedAdd(1,2,3));
console.log(memoizedAdd(1,4,3));
// propValue({value:1})