var maximumWealth = function(accounts) {
   let sum=[];//定义每个元素数组之和为一个数组，求Max
    let list=accounts.length;//缓存二维数组列数
    function and(list_list){//求和函数，计算一行的总和
       var a=0;
       for(let i=0;i<list_list.length;i++){
        a=a+list_list[i];
       }
       return a;
    }
    //for循环遍历得到每一列的行总和
    for(var j=0;j<list;j++){
     sum[j]=and(accounts[j]);
    }
    function max(){//比较取最大
        var m=sum[0];
        for(let b=0;b<list;b++){
            if(m<sum[b]){
                m=sum[b]
            }
        }
         return m
    }
    return max(sum)

    

// return Math.max(...accounts.map(item => item.reduce((l, i) => l + i, 0)))//展开数组

};
console.log(Math.max(1,2,3));
