var arr=[ [1, [2, 3, 4], 5], 6 ];
function flatten(arr){
    return arr.toString().split(',').map(item=> +item)
}//.map,将[ '1', '2', '3', '4', '5', '6' ]=>[ 1, 2, 3, 4, 5, 6 ]
console.log(flatten(arr))