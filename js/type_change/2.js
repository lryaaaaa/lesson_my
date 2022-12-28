//a必是复杂数据
let a= {
    i:1,
    valueOf:function(){
        return this.i++
    }
};
// Number(a);
console.log((a == 1 && a == 2 && a == 3) === true)