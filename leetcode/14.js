//最长公共前缀
var longestCommonPrefix = function(strs) {
    let re=strs[0]||"";
    let len=strs.length;
    // console.log(strs[0].slice(0,re.length));
    if(len===1){
        return strs[0];
    }
    //    console.log(typeof strs[0])
    for(let i=0;i<len;i++){
        while(strs[i].slice(0,re.length)!==re){
           re=re.slice(0,re.length-1)
        }
    }
    return re
};
//厉害，
console.log(longestCommonPrefix(["avc","avb",'ava']))
