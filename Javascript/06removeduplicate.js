var arr=[1,2,1,2,3,4];

function removeduplicate(arr){
    return arr.filter((e,index)=>arr.indexOf(e)==index)
}

console.log(removeduplicate(arr))