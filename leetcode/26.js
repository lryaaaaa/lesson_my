//删除有序数列中的重复项




//经典快慢指针。快指针走过的地方就失去了价值，只需要遍历一次。慢指针所形成的数组是在快指针之前的，所以答案应该是数组的一个子集长度是慢子针的长度，我们返回的值也是这个长度。慢指针长度的数组被截取出来之后，便成为了删除重复元素的数组。
var removeDuplicates = function(nums) {
    let left = 1; right = 1;//第一个值必然加入left，所以left长度初始值为一
    while(right<nums.length){
        if(nums[right]!==nums[right-1]){//相等的值直接跳过，不相等的值加入慢指针的数组当中。
            nums[left] = nums[right];
            left++;
        }
        right++;
    }
    return left;
};
console.log(removeDuplicates([1,2,2,3,4]))