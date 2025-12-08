var n=10;
var f=0;s=1;
var next=0;
for(var i=0;i<n;i++){
    console.log(f);
    next=f+s;
    s=f;
    f=next;
}