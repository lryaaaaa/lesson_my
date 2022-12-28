- js类型知识点
  1. 7个基础数据类型+一个对象
  2. typeof  null   object[object array]
     instanceof原型链查找 Object 最后指向null
  3. 基于对象的面向对象
     new  constructor +prototype
  4. prototype 继承
  5. 类型转换   隐式+显示
  6. 0.1+0.2 !==0.3

- 请向学习this的规则一样，学习类型转换的规则

- js是弱类型语言，类型转换系统，
   字符串
   布尔值
   字符型
   +  !   *  / ===隐式类型转换

- 由于js神奇的类型转换，建议代码里不用2个等号，用3等号，更为严谨
   []+{}===?
   {}+[]===?

- 显式类型转换
   String()
   Number()   +'42'  new Date('42')  parseInt('42')
   Boolean()
   类型转换了，但没有调用以上方法，为隐式转换
   

- +号（字符串拼接，数值相加）
    x+y  
    1. 加号两边存在字符串，做字符串拼接，不是字符串的字符串的隐式类型转换为字符串
    2. 如果加号左右任意一个是对象，且能转换为字符串，做拼接
    3. 变成数值类型，相加

- String() 强制类型转换的规则
   简单数据类型直接加 '',
   复杂数据类型强制转成字符串的时候，有好几种规则
     - 对象字面量  [object Object]
     - 数组[1,2,3]=>'1,2,3'   []+{}
       调用原型链上的toString(),结果返回
- Number() 强制类型转换
   1. 基础数据类型
      undefined(4a) =>NaN  NaN.typeof=number
      symbol()  报错
   2. 复杂数据类型
      - 先转换为基础类型，再转换为number，过程叫 ToPrimitive
         复杂数据类型转变为基础数据类型
        如果对象上存在valueOf方法，返回基础数据类型，
        再试试toString

