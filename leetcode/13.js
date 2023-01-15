//罗马数字转整数   map 妙啊
const romanToInt = s => {
    let map = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]]);
    //set的过程
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        let left = map.get(s[i]);//找key,get其value
        let right = map.get(s[i + 1]);
        res += left < right ? -left : left
        //res+= left(-left) left小则﹣,大则正
    }
    return res
};
