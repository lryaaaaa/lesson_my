var twoSum = function(nums, target) {
  let ans=[];//返回值为一个数组
  for(let i=0;i<nums.length;i++){
      for(let j=0;j<nums.length;j++){
        if(nums[i]+nums[j]===target && i!==j){
            ans[0]=i;
            ans[1]=j;
        }
      }
  }
  return ans
};
console.log(twoSum([2,7,11,15],9))
//两数之和