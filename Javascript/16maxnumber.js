var arr=[32,43,98,2,12,34,2];

function maxnumberinarray(arr){
    var max=Number.MIN_VALUE
   for(var val of arr){
    if(val>max){
        max=val
    }
   }
   return max
}
console.log(maxnumberinarray(arr))