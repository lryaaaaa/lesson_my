//三数之和
// var threeSum = function(nums) {
//     let ans=[];
//     for(let i=0;i<nums.length-2;i++){
//         for(let j=i+1;j<nums.length-1;j++){
//             for(let k=j+1;k<nums.length;k++){
//                 if(nums[i]+nums[j]+nums[k]===0){
//                     let num=[nums[i],nums[j],nums[k]];
//                     num.sort((a,b)=>a-b);
//                     ans.push(num)
//                 }
//             }
//         }
//     }
//     for(let i=0;i<ans.length-1;i++){
//         for(let j=i+1;j<ans.length;j++){
//             if(ans[i]===ans[j]){
//                 ans.remove(ans[j])
//             }
//         }
//     }
//     console.log(ans[0]===ans[2])
//      return ans
// };
//不行，有问题


//直接开源
var threeSum = function (nums) {
    let res = []
    let length = nums.length;
    nums.sort((a, b) => a - b) // 先排个队，最左边是最弱（小）的，最右边是最强(大)的
    if (nums[0] <= 0 && nums[length - 1] >= 0) { // 优化1: 整个数组同符号，则无解
      for (let i = 0; i < length - 2;) {
        if (nums[i] > 0) break; // 优化2: 最左值为正数则一定无解
        let first = i + 1
        let last = length - 1
        do {
          if (first >= last || nums[i] * nums[last] > 0) break // 两人选相遇，或者三人同符号，则退出
          let result = nums[i] + nums[first] + nums[last]
          if (result === 0) { // 如果可以组队
            res.push([nums[i], nums[first], nums[last]])
          }
          if (result <= 0 ) { // 实力太弱，把菜鸟那边右移一位
            while (first < last && nums[first] === nums[++first]){} // 如果相等就跳过
          } else { // 实力太强，把大神那边右移一位
            while (first < last && nums[last] === nums[--last]) {}
          }
        } while (first < last)
        while (nums[i] === nums[++i]) {}
      }
    }
    return res
  }//看完还是不懂
console.log(threeSum([-1,0,1,2,-1,-4]))




