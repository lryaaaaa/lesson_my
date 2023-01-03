//返回最大正方形   动态规划
var maximalSquare = function(matrix) {
    let n=matrix.length,m=matrix[0].length;//缓存原数组边长
   let dp=Array.from({length:n},()=>new Array(m).fill(0));
   //声明一个相同大小的矩阵,值都为0
   let max=0;
   for(let i=0;i<n;i++){//第一行
    if(matrix[i][0]==='1'){
        dp[i][0]=1;
        max=1;
    }
   }
   for(let i=0;i<m;i++){//第一列
    if(matrix[0][i]==='1'){
        dp[0][i]=1;
        max=1;
    }
   }
   for(let i=1;i<n;i++){
    for(let j=1;j<m;j++){
        if(matrix[i][j]==='1'){
        dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1;
        max=Math.max(dp[i][j],max);
        //比较当前max和dp[i][j]取较大值
    }
    }
   }
   return max*max;
};
