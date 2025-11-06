var arr=[10,200,33,23,21,433];

function secondlarge(arr){
    var first=Number.MIN_VALUE
    var second=Number.MIN_VALUE
   
    for(var i=0;i<arr.length;i++){
        if(arr[i]>first){
            second=first
            first=arr[i]; 
        }
        if(arr[i]<first && arr[i]>second){
            second=arr[i]
        }

       
    }
     return second
}

console.log(secondlarge(arr))