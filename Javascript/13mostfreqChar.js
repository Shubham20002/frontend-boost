var name="shubhhshhsh";

function mostfreqchar(str){
    var output={};
    var maxvalue=0;
    var mostchar=""
    for(var char of str){
        output[char]=(output[char] || 0)+1
    }
console.log(output)
    for(var key in output){
        if(output[key]>maxvalue){
            maxvalue=output[key];
            mostchar=key
        }
    }
    return mostchar
}

console.log(mostfreqchar(name))