//判断回文数
// var isPalindrome = function(x) {//x为整数
//     let s=x+"";
//     let left=0, right=s.length-1;
//     console.log(s)
//     while(left<right){
//         if(x<0){
//             return false
//         }
//         if(s[left++]===s[right--]){
//             console.log('....')
//             return true
//         }else{
//             return false//条件不符合直接返回
//         }
//     }
//    return true
// };有BUG
/**
 * @param {number} x
 * @return {boolean}
 */ 
var isPalindrome = function(x) {
    if(x<0){
        return false
    }else{
        x=x.toString().split('')
        if(x.toString()===x.reverse().toString()){//反转再字符串化
            return true
        }else{
            return false
        }
    }
};






// var ishuiwen= function(s){//定义判断是否为回文字符串的函数
//     let left=0, right=s.length-1;
//     while(left<right){
//         if(s[left++]===s[right--]){
//             return true
//         }else{
//             return false//条件不符合直接返回
//         }
//     }
//    return true
// } 
console.log(isPalindrome(1000021))