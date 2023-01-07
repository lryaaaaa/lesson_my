var arr=[1,[2,[3,4],5],6];//需要flattenDeep()递归   lodash.js
function flatten(arr){
    var result=[];
    for(var i=0,len=arr.length;i<len;i++){
        if(Array.isArray(arr[i])){
            result=result.concat(flatten(arr[i]));//递归思想
        }else{
            result.push(arr[i])
        }
    }
    return result
}
console.log(flatten(arr))