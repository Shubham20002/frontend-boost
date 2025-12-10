var arr=[3,4,9,5,4,76,96,53]
var newarr=arr.sort((a,b)=>a-b)
console.log(newarr)

var f=0;
var l=arr.length-1
var target=53

while(f<=l){
    var mid=Math.floor((f+l)/2)
    if(arr[mid]==target) {
        console.log(mid)
        break
    } 
    else if(target<arr[mid]){
        l=mid-1
    } 
    else{
        f=mid+1
    }
}