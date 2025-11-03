var num=5;

function factorial(num){
    fact=1;
    for(var i=1;i<=num;i++){
        fact*=i
    }   
    return fact
}

console.log(factorial(num))

