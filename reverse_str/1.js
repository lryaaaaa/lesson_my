//匿名函数
//js 变量或常量的类型由值决定
//函数表达式
const reverse= function(str){   //
    // let reverseStr='';
    // for(let i=str.length-1;i>=0;i--){
    //     reverseStr+=str[i];

    // }
    //   return reverseStr;
    return str.split('').reverse().join('')  //切割字符串，反转，输出数组；
}
 console.log(reverse('hello'));
 console.log(reverse('aba'));//回文字符串,具有对称性。
//函数定义
// function reverse(){


// }