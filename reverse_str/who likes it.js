// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe('example tests', function() {
//   it('should return correct text', function() {
//     assert.strictEqual(likes([]), 'no one likes this');
//     assert.strictEqual(likes(['Peter']), 'Peter likes this');
//     assert.strictEqual(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
//     assert.strictEqual(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
//     assert.strictEqual(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');
//   });
// });
// console.log()


function likes(names){
    names =names || [];
    switch(names.length){
        case 0:
            return'no one likes this';
             break;
         case 1:
            return names[0]+' likes this';
         break;
         case 2:
            return names[0]+' and '+names[1]+' like this';
         break;
         case 3:
            return names[0]+','+names[1]+' and '+names[2]+' like this';
         break;
        default:
            
                return names[0]+','+names[1]+' and '+(names.length-2)+' like this';
            
           
         break;

    }
}
console.log(likes([]))
console.log(likes(["asd"]))
console.log(likes(['asd','aws']))
console.log(likes(['asd','aws','qwe']))
 console.log(likes(['asd','aws','qwe','qaz']))
console.log(likes(['asd','aws','qwe','qaz','qazs']))



// function likes (names) {
//    var templates = [
//      'no one likes this',
//      '{name} likes this',
//      '{name} and {name} like this',
//      '{name}, {name} and {name} like this',
//      '{name}, {name} and {n} others like this'
//    ];
//    var idx = Math.min(names.length, 4);  //取最小值
   
//    return templates[idx].replace(/{name}|{n}/g, function (val) {
//      return val === '{name}' ? names.shift() : names.length;
//    });
//  }
//  ————————————————
//  版权声明：本文为CSDN博主「YeSyinnng」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
//  原文链接：https://blog.csdn.net/qq_39532595/article/details/86516845


// function likes(names) {
//    return {
//      0: 'no one likes this',
//      1: `${names[0]} likes this`, 
//      2: `${names[0]} and ${names[1]} like this`, 
//      3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
//      4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
//    }[Math.min(4, names.length)]
//  }









// function likes(names) {
//    names.length === 0 && (names = ["no one"]);
//    let [a, b, c, ...others] = names;
//    switch (names.length) {
//      case 1: return `${a} likes this`;
//      case 2: return `${a} and ${b} like this`;
//      case 3: return `${a}, ${b} and ${c} like this`;
//      default: return `${a}, ${b} and ${others.length + 1} others like this`;
//    }
//  }