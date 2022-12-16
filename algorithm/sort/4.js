const bubbleSort=arr=>{
   console.time('冒泡排序耗时');//时间计算
   const length=arr.length;//缓存数组长度  性能优化
   // 相邻  一趟循环确定一个位置
   for(let i=0;i<length-1;i++){
     let isSorted=true;//是否有序?
    //搞定所有元素  位置上放置正确的数字
    for(let j=0; j<length-i-1;j++){//内循环排好i个位置后，再需要交换的数组元素-1
        
       if(arr[j]>arr[j+1]){
        // const temp=arr[j];
        // arr[j]=arr[j+1];
        // arr[j+1]=temp;
        [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
        isSorted=false;
       }
    }
        if(isSorted){
                //一次都没有发生
                break;
            }
   }
   console.timeEnd('冒泡排序耗时')
}
const arr=[5,8,6,3,9,2,1,7];//引用式赋值   堆内存中分配  值决定
bubbleSort(arr);//引用
console.log(arr);