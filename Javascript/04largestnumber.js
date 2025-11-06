var arr=[10,20,30,2,3,300,33];

function findlargestnumber(arr){
    var large=arr[0];
    for(var i=0;i<arr.length-1;i++){
        if(arr[i]>large){
            large=arr[i]
        }
    }
    return large
}

console.log(findlargestnumber(arr))