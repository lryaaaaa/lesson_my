function add(a,b){
    //参数校验，要是数字
    return a+b;
}
//可以计算，不能缓存，运行结束后缓存会清除
//要记住计算结果
// memorize 函数 ()    add  传给memorize
var memorizedAdd=memorize(add);
memorizedAdd(1,1);