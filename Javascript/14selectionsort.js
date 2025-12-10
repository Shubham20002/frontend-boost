var arr=[3,2,4,9,5,0]

// selection sort-> sort minimum number in unsorted array adn place infront of unsorted array

for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[j]<arr[i]){
            var temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp
        }
    }
}

console.log(arr)