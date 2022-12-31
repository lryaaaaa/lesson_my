var canConstruct = function(ransomNote, magazine) {
    //循环ransomNote，依次取出字符，如果magazine里面有此字符，则删除该字符；依次循环，直到ransomNote没有值或者magazine里面不包含该字符为止；
   for(let val of ransomNote){
    if(magazine.includes(val)){
        magazine = magazine.replace(val, '')

    }else{
       return false
    }
   }
   return true
};