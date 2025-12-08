var arr=[1,2,3,[4,5,6,[7,8]],9,10];

function faltarray(arr){
    var newarray=[]
    for(var i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
           newarray=newarray.concat(faltarray(arr[i]))
        }
        else{
            newarray.push(arr[i]);
        }
    }
    return newarray
}

console.log(faltarray(arr));