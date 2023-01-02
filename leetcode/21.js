//合并两个有序链表
var mergeTwoLists = function(list1, list2) {
    if(! list1 && !list2 ) return null
    // if(!list1|| !list2) return list1 ? list1 : list2
    let newHead= new ListNode(null);
    cur=newHead;
    while(list1&&list2){
        if(list1.val>list2.val){
            cur.next=list2;//将较小值指入新链表的下一节点节点
            // 链表节点指向下一个节点的指针
            cur=cur.next;//指针指向下一节点
            list2=list2.next;//指针指向下一节点
        }else{
          cur.next=list1;
          cur=cur.next;
          list1=list1.next;
        }
    }
    while(list1){
        cur.next=list1;
        cur=cur.next;
        list1=list1.next;
    }
    while(list2){
        cur.next=list2;
        cur=cur.next;
        list2=list2.next;
    }
    return newHead.next

};