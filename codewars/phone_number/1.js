 function createPhoneNumber(numbers){
 //字符串 (123) 456-7890 numbers[0] 
//     const nums=numbers.join('');//将数组中的数字取出来
//     const a=nums.substr(0,3);
//     const b=nums.substr(3,3);
//     const c=nums.substr(6,4);
//     return '('+a+') '+b+'-';

//  //  return '('+numbers[0]+numbers[1]+numbers[2]+') '+numbers[3]+numbers[4]+numbers[5]+'-'+numbers[6]+numbers[7]+numbers[8]+numbers[9]
 return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}
// //(123) 456-7890
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));

// let name='刘文祥'
// //字符串模板
// let word = `hello,${name}。`
// console.log(word);
// const LikeName=["Aer","Ber"];
// console.log(LikeName)
