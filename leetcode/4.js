//寻找两个正序数组的中位数
var findMedianSortedArrays = function(nums1, nums2) {
      nums1.push.apply(nums1,nums2);//将数组nums2插入nums1中
    // nums1.push(...nums2);
    //排序
    nums1.sort((a,b)=>{//排序方法可优化，这里我使用最少代码的方法
        return a-b
    })
    let mid=0;
    let length=nums1.length;
    console.log(length)
    console.log(nums1)
    if(length%2!==0){//位数为奇
       mid=nums1[(length-1)/2];
    //    console.log(mid)
    }else{
        mid=(nums1[(length-2)/2]+nums1[length/2])/2
    }
      return mid;
};
// let nums1=[1,2,3,4],nums2=[1,2,3,4,5];
console.log(findMedianSortedArrays([1,2,3,4],[1,2,3,4]))
// findMedianSortedArrays();
// console.log(nums1);

//暴力结题，用时不合格


//开源代码
var findMedianSortedArrays = function(nums1, nums2) {
    var flag = (nums1.length + nums2.length) % 2 == 0;   // 中位数是中间两个数的平均
    var midNum = Math.floor((nums1.length + nums2.length)/2);
    for (var i=0, j=0; i+j<(flag ? midNum-1 : midNum); ) {
        if (i == nums1.length) {
            j++;
            continue;
        } else if (j == nums2.length) {
            i++;
            continue;
        }

        if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    var tmp = [...nums1.slice(i), ...nums2.slice(j)].sort((a,b)=>a-b);
    if (!flag) {
        return tmp[0];
    } else {
        
        return (tmp[0]+tmp[1]) / 2;
    }
};

