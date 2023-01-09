// var lengthOfLongestSubstring = function(s) {
//     console.log(s.length);
//    for(let i=0;i<s.length;i++){
//     for(let j=0;j<s.length;j++){
//         if(s[i]===s[j]&& i!==j){
//             s[j]=s[j].replace('')
//             s.length--;
//         }
//     }
//    }
//    console.log(s)
//    return s.length
// };
// console.log(lengthOfLongestSubstring("asdaasdasd"))
var lengthOfLongestSubstring = function(s) {
     let max=0;
    let str=[];
    for(let i=0;i<s.length;i++){
        if(str.indexOf(s[i])==-1){
            str.push(s[i])
        }else{
           
       str.splice(0,str.indexOf(s[i])+1);//清空
       str.push[i]
    // console.log(str)
        } 
        if(max>s.length-i+1)break;
        max=Math.max(max,str.length)
    }
    return max

};
console.log(lengthOfLongestSubstring("pwwkew"))