var longestPalindrome = function(s) {
   var ishuiwen= function(s){//定义判断是否为回文字符串的函数
        let left=0, right=s.length-1;
        while(left<right){
            if(s[left++]===s[right--]){
                return true
            }else{
                return false//条件不符合直接返回
            }
        }
       return true
    } 
    let max=0;//记录每次回文字符串长度
    let ans="";//定义一个字符串，记录最大长度时的回文
    if (!s || s.length < 2) {
        return s;
      }
    for(let i=0;i<s.length;i++){
        for(let j=1;j<=s.length-i;j++){//s.substr(i,j)是子串，j为子串长度，i为起始位置
            if(ishuiwen(s.substr(i,j))&& j>max){
                max=j;
                console.log(s.substr(i, j) + max);
                ans=s.substr(i,j);//记录回文
            }
        }
    }
    return ans;
};
console.log(longestPalindrome("ac"))