var fizzBuzz = function(n) {
    let arr=[];
    arr.length=n;
    for(let i=0;i<n;i++){
        arr[i]=i+1;//得到序列1~n的数组，
        if(arr[i] % 3 === 0 && arr[i]% 5 === 0){
            arr[i]='FizzBuzz'
        }else if(arr[i] % 3 === 0 && arr[i]%5 != 0){
            arr[i]='Fizz'
        }else if(arr[i] % 3 != 0 && arr[i]%5 === 0){
            arr[i]='Buzz'
        }
        
    }
    str= arr.toString()//因为结果要字符数组，所以先变成字符串，再用逗号切割成字符数组
    return str.split(',')
};
console.log(fizzBuzz(10));


//以下方法为逐个添加，很好

// var fizzBuzz = function(n) {
//     let newArr = []
//     for (let i = 1; i <= n; i++) {
//         if (i%3 === 0 && i%5 === 0) {
//             newArr.push('FizzBuzz')
//         } else if (i%3 === 0){
//             newArr.push('Fizz')
//         } else if (i%5 === 0){
//             newArr.push('Buzz')
//         } else {
//             newArr.push(i.toString())
//         }
//     }
//     return newArr

// }