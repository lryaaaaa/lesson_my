// let word= 'hello,waa';
// console.log(word.split(" "),word);
// let arr="Iv an your father.";
// //console.log(arr.split(3,3),arr);
// console.log(Math.min(...arr.split(" ").map(item=>item.length)))
var str = "How are you doing today";
var arr = str.split(" ");
let minsize = arr[0].length;
for(let i = 1; i < arr.length; i++){
    if(arr[i].length < minsize)minsize = arr[i].length;
}
console.log(minsize);