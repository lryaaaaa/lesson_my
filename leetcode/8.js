//字符串转化整数
var myAtoi = function(s) {
    let idx=0,pre="",num="";
    while(s[idx]===" "){
        //循环判断下一位是否为空格
        idx++;
    }
    while(s[idx]==="+"||s[idx]==="-"){//如果符号不止一个，返回0
        if(pre){
            return 0;
        }
        pre=s[idx++]
    }
    while(s[idx]&&s[idx].charCodeAt()>=48&&s[idx].charCodeAt()<=57){
        num+=s[idx++];//字符串
    }

    let res=Number(pre+num)||0;
    res=Math.max((-2)**31,res);//和边界比
    res=Math.min(2**31-1,res);
    return res



};
console.log(myAtoi("  -42"))




//正则
// var myAtoi = function(str) {
//     //利用正则
//     let result = str.trim().match(/^[-|+]{0,1}[0-9]+/)
//     if(result != null){
//         if(result[0] > (Math.pow(2,31) -1)){
//             return Math.pow(2,31) -1
//         }
//         if(result[0] < Math.pow(-2,31)){
//             return Math.pow(-2,31)
//         }

//         return result[0]
//     }
    
//     return 0
// };
