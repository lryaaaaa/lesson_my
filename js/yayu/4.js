var add = function(a, b, c) {
    return a + b + c
  }
  function memorize(f) {
    // 缓存结果 {}  key  
    // 
    // console.log(fn, args);
    var cache = {
        // key 字符串
        // "lu": "抖音"
    };
    // 作用域 
    return function(){
        // console.log('我是inner function', cache.lu)
        // console.log(Array.prototype.join.call(arguments, ","), '////');
        var key = arguments.length + Array.prototype.join.call(arguments, ",");
        // console.log(key, '/////');
        if (key in cache) { // in json 运算符
            // console.log('缓存');
            return cache[key] // 没有运行  f
        } else {
            // console.log('add。。。。。')
            // cache[key] = f(arguments);
            // apply call 都可以运行函数， 手动指定内部的this , 
            // apply  数组集合， 作为f 的参数
            return cache[key] = f.apply(this, arguments)
            // return cache[key]
            // cache[key] = f.call(this, ...arguments)
        }
        // else return cache[key] = f.apply(this, arguments)

    }
}
  //memorize 高阶函数
  //memorize 内部生成了闭包函数，并且return给
  var memorizeAdd=memorize(add);
  console.time('use memorize')
  for(i=0;i<100000;i++){
//   memorizeAdd(1,2,3)
add(1,2,3)
}
  console.timeEnd('use memorize')
