var name="shubhamoiu";

function firstnonrepchar(str){
    var output={};
    for(var char of str){
        output[char]=(output[char] || 0)+1
    }

    for(var key in output){
        if(output[key]==1){
            return key
        }
    }
}

console.log(firstnonrepchar(name))