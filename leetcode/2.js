// var addTwoNumbers = function(l1, l2) {
//     let str1=l1.reverse().join('');
//     let str2=l2.reverse().join('');
//     console.log(str1,str2)
//     let maxLength=Math.max(str1.length,str2.length);//获取最大的shuzu长度
//     str1=str1.padStart(maxLength,0);
//     str2=str2.padStart(maxLength,0);
//     //使其位数相同，长度不够的前面补0
//     let temp=0;//相加之和   %10
//     let flag=0;//进位
//     let result="";
//     //低位到高位
//     for(let i=maxLength-1;i>=0;i--){
//         temp=parseInt(str1[i])+parseInt(str2[i])+flag;//字符串相加变为数字相加
//         flag=Math.floor(temp/10);//得道相加结果除以10的到的商（0或1）
//         result =temp%10+result;
//     }
//     //最高位
//     if(flag===1){
//         result="1"+result;
//     }
//     return result.split('').reverse()
// };

// console.log(addTwoNumbers([2,4,3],[5,6,4]))
//如果是数组，字符串，以上代码均可实现（稍加改动），甚至是高位相加，可LeetCode。2.js要实现的是链表，所以，pass

var addTwoNumbers = function(l1, l2) {
   let newHead=new ListNode(0);//定义一个新的结果链表，初始值为0
   let p=l1,q=l2,z=newHead;//三个指针分别指向三个链表
   let carry=0;//进位值
   while(p||q){//p或q存在时
    let x=p ? p.val:0;//有则取值，无则取0
    let y=q ? q.val:0;
    let sum=x+y+carry;//同位相加之和
    carry=sum<10 ? 0 : 1;//sum小于10不进位
    z.next=new ListNode(sum%10);//链表节点值为sum%10取余
    z=z.next;//指针指向下一节点
    if(p){
        p=p.next
    }
    if(q){
        q=q.next
    }

   }
   if(carry>0){//此时p,q都不存在链表节点值看carry
    z.next=new ListNode(carry);
   }
   return newHead.next
};
