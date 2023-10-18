console.log("connected with external file");

var a = 1;
var b = 2;

if(a+b>4){
    console.log(a+b);
} 
else if(a+b <1)
{
    console.log(a+b);
}
else
console.log ("hi");

for(var num=0;num <50;num=num+2)
    console.log(num);
var a= [1,2,3,4,5,6,7,8,9]
a.forEach(item => console.log(item));

//this gave us the index of all the items in the array
for(var item in a){
    console.log(item);
}

// this outputs the items in the array
for(var item of a){
    console.log(item);
}