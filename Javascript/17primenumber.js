// check given number is prim number or not

function checkprime(n){
    if(n<2) return false
    for(var i=2;i<Math.sqrt(n);i++){
        if(n%i===0) return false
    }
    return true
}

console.log(checkprime(13))