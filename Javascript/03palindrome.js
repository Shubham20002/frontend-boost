var str="mam";

function chakpalndrome(str){
    return str== str.split("").reverse().join("")
}

function checkpalindrome2(str){
    newstr="";
    for(var i=str.length-1;i>=0;i--){
        newstr+=str[i];
    }
    return newstr==str;
}

console.log(chakpalndrome(str))
console.log(checkpalindrome2(str))