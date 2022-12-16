const bubbleSort=arr=>{
    //多声明变量
   let tmp=0;//记录最后一次交换的位置
   let lastExchangeIndex=0;//无序列的边界
   let len=arr.length;
   let sortBorder=len-1//已排好序的边界
   for(let i=0;i<len;i++){
    let isSorted=true;//是否可以退出
    //j 0->sortBorder  swap
    for(let j=0;j<sortBorder;j++){
        if(arr[j]>arr[j+1]){
            tmp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=tmp;
            isSorted=false;
            lastExchangeIndex=j;
        }
    }
    sortBorder=lastExchangeIndex;
    if(isSorted){
        break;
    }
   }
   return arr;

}
console.log(bubbleSort([3,4,2,1,5,6,7,8]));