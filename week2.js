const arr=[1,2,3,4,5];
function triple(n)
{
    return n*3;
}
let new_arr=arr.map(triple)
console.log(new_arr);
const names=["john","hadia","neha"]
names.filter((name)=>
    {
        return name!="neha"
    })
function product(a,b){
    return a*b;
}
const arr=[1,2,3,5];
var product_of_arr=arr.reduce(product)
console.log(product_of_arr)
