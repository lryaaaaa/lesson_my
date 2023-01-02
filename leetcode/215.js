//数组中的第K个最大元素
// var findKthLargest = function(nums, k) {
//     nums.sort((a,b)=>{
//         return b-a
//     })//数组元素按从大到小排列
//     return nums[k-1]
// };




//题目本质，排序
var findKthLargest = function(nums, k) {
    let tmp=0;//记录最后一次交换的位置
    let lastExchangeIndex=0;//无序列的边界
    let len=nums.length;
    let sortBorder=len-1//已排好序的边界
    for(let i=0;i<len;i++){
     let isSorted=true;//是否可以退出
     //j 0->sortBorder  swap
     for(let j=0;j<sortBorder;j++){
         if(nums[j]>nums[j+1]){
             tmp=nums[j];
             nums[j]=nums[j+1];
             nums[j+1]=tmp;
             isSorted=false;
             lastExchangeIndex=j;
         }
     }
     sortBorder=lastExchangeIndex;
     if(isSorted){
         break;
     }
    }
   let a=nums[len-k]
    return a
 };