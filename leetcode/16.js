//最接近的三数之和
// var threeSumClosest = function(nums, target) {
//     nums.sort((a,b)=>a-b);
//     let len=nums.length
//     let sum=nums[0]+nums[1]+nums[2];
//     // if(sum>target) return sum;
//     for(let i=0;i<len-2;i++){
//         let left=i+1;
//         let right=len-1;
//         let and=muns[i]+nums[left]+nums[right];
//       if( Math.abs(and-target)<Math.abs(sum-target)){
//         sum=and;
//         if(and>target){
//             right--
//         }if(and<target){
//             left++
//         }else{
//             return and
//         }
//       }
//     }
//    return sum
// };
//有问题，开源

var threeSumClosest = function(nums, target) {
    let N = nums.length
    let res = Number.MAX_SAFE_INTEGER
    nums.sort((a, b) => a - b)
    for (let i = 0; i < N; i++) {
        let left = i + 1
        let right = N - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum
            }
            if (sum < target) {
                left++
            } else if (sum > target) {
                right--
            } else {
                return sum
            }
        }
    }
    return res
};

