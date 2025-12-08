var arr=[1,2,3,4,5,6];

var aas=arr.reduce((acc,curr)=>{
    acc += curr
    return acc
},0);
console.log(aas)