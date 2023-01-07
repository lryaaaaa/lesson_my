function Aer(str){
    
    var value = parseInt(str).toString(2); 
    //parsetInt里面是要转换的数字，toString里面是要转换的进制，
    //进制转化，再判断最后两位是否为0，否就不是4的倍数
    // console.log(value)
    let arr=value.split('').map(item=>+item)
    // console.log(arr)
    let len=arr.length
    // let b=false
    if(arr[len-2]===0&&arr[len-1]===0){
        return true
    }
   return false
}
console.log(Aer("4"))
// Aer();