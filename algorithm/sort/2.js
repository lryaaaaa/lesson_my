//内存分配  放在栈内存
let x=1, y=2;//简单
let z;
//内存分配 对象放在堆内存
let o={name:'liu'};//对象
let a=o;
a.name='xia';//引用，引用式赋值
z=x;
x=y;
y=z;
//x,y值交换