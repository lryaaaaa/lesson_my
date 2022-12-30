// let nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
function twoOutOfThree(nums1, nums2, nums3) {
    // 1. 先求两两数组间的交集
    let arr12 = nums1.filter(num => nums2.includes(num))
    let arr13 = nums1.filter(num => nums3.includes(num))
    let arr23 = nums2.filter(num => nums3.includes(num))
    // console.log(arr12, arr13, arr23);
    // 2. 取交集的并集
    let res = [...arr12, ...arr13, ...arr23]
    // 3. 对结果进行去重
    return [...new Set(res)]
}

console.log(twoOutOfThree(nums1, nums2, nums3));
