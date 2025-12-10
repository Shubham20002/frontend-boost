var name="shubhampp"

function freofchar(str){
    var output={};
    for(var char of str){
        output[char]=(output[char] || 0)+1
    }
    return output
}

console.log(freofchar(name))