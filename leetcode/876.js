var middleNode = function(head) {
   let slow=head;//，慢指针
   let fast=head;
   while(fast){
    if(!fast.next)break;
    fast=fast.next.next;
    slow=slow.next
   }
   return slow
};
// console.log(middleNode(1,2,3,4,5,6))
//链表，不懂 指针