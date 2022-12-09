var add = function(a, b, c) {
    return a + b + c
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
            // console.log('缓存');
            return cache[key]//变量查找用[]
        }else{
            // console.log('add...');
            //apply  call 可以运行函数，且手动指定this的指向
            // apply 传数组集合， 作为fn的参数
            return cache[key]=fn.apply(this,arguments)
            // return cache[key]=fn.call(this,...args)
        }
    }

}
//高阶函数
// memorize  内部生成闭包函数
  var memoizedAdd = memorize(add)
  console.time('use memorize');//计时
  for(i=0;i<100000;i++){
  memoizedAdd(1, 2, 3) // 6
}
  console.timeEnd('use memorize');
  
  // memoizedAdd(1, 2, 4) // 6
  
  