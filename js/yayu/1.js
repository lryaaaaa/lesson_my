function add(a,b){
    return a+b;
}
function memorize(fn){//fn 为形参  等待着被优化的函数
    //...args  可以拿到所有参数
    //缓存结果 使用对象字面量 {} 然后用key去查找
    //  console.log(fn,args);
    var cache={
        // "lu":"抖音"
    };
    return function(){//闭包 函数内部还有函数
        // console.log(Array.prototype.join.call(arguments,","),'///');
        var key =arguments.length+Array.prototype.join.call(arguments,",");
        // [1,2,3]join(',') 得到 '1,2,3'
        // console.log(key);
        //   console.log('我是inner function',cache.lu)//作用域链，可以访问
        if(key in cache){
            console.log('缓存');
            return cache[key]//变量查找用[]
        }else{
            console.log('add...');
            //apply  call 可以运行函数，且手动指定this的指向
            // apply 传数组集合， 作为fn的参数
            return cache[key]=fn.apply(this,arguments)
            // return cache[key]=fn.call(this,...args)
        }
    }

}
//函数运行结束应该销毁
//函数进入执行栈
var memoizedAdd = memorize(add);//他运行才会生成闭包函数
// 出栈  内存回收  cache没有了, cache.lu 被引用
memoizedAdd(1,2);//运行时可以找到生成时上下文环境的变量
memoizedAdd(1,2);