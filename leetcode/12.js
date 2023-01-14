//数字转罗马  开源，强强强
var intToRoman = function(num) {
    let intArr=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let RomanArr=["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let index=0;
    let res="";
    while(index<13){
        while(num>=intArr[index]){
            res+=RomanArr[index];
            num-=intArr[index];
        }
        index++;
    }
    return res
};

