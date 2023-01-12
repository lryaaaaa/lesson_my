//反转整数
// var reverse = function(x) {
// //无论有没有符号，x都为数，所以符号位应可能有一位
//    let str=x+'';
//    let arr=str.split('');
//    console.log( Math.pow(-2, 31))
// //    console.log(typeof x)
//    let len=arr.length;
//    if(x<0){
//     for(let i=1;i<len/2;i++){
//         console.log('.....')
//     // [arr[i],arr[len-i]] = [arr[len-i],arr[i]]
//        let a=arr[i];
//        arr[i]=arr[len-i];
//        arr[len-i]=a;
//       }
//    }else{
//     for(let i=0;i<len/2;i++){
//     // [arr[i],arr[len-i-1] ]= [arr[len-i-1],arr[i]]
//     let a=arr[i];
//        arr[i]=arr[len-i-1];
//        arr[len-i-1]=a;
//      }
//    }else if (x < Math.pow(-2, 31) || x > Math.pow(2, 31) - 1) {
//                return 0;
//    }
//   return arr.join('')
// };
// console.log(reverse(1234))
// // Math.abs
//以上为我的思考，代码过于复杂化了，无须如此



//代码开源
var reverse = function(x) {
    let rev = 0;
    while (x !== 0) {
        const digit = x % 10;
        x = ~~(x / 10);
        rev = rev * 10 + digit;
        if (rev < Math.pow(-2, 31) || rev > Math.pow(2, 31) - 1) {
            return 0;
        }
    }
    return rev;
};
