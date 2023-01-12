//Z字形变换
var convert = function(s, numRows) {
    if(numRows===1||s<=numRows)return s;//字符串只有一列的情况
    const rows = new Array(numRows).fill("");//定义一个空数组
    const n = 2 * numRows - 2;//周期
    for(let i = 0; i < s.length; i++) {
        const x = i % n;
        rows[Math.min(x, n - x)] += s[i];//字符串拼接 x=x+y
    }
    return rows.join("");//合并字符串数组的每一位
    // return rows

};
console.log(convert("qwertasdwsw",3))