
var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let maxArea = 0; // 最大容积
    while(left<right){
        // 计算出 当前的容积  与最大容积比较，取出最大的
        const currentArea = (right - left)*Math.min(height[left],height[right]);
        maxArea = Math.max(maxArea,currentArea);
        //  left 向内移动 
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))