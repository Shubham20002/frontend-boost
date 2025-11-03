var str="shubham";

function reversestr(str){
    var newstr='';
    for(var i=str.length-1;i>=0;i--){
        newstr+=str[i];
    }
    return newstr;
}

function reversestr2(str){
    return str.split("").reverse().join("")
}

console.log(reversestr(str))
console.log(reversestr2(str))