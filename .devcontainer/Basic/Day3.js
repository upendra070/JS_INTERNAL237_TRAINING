
// function r(n){
//     return n*10;
// }

// let ch=r(2);
// // console.log(ch);


// let arr=[1,2,3,4,"ab","bc",ch];
// console.log(arr);


//let fruit=["apple","orange","banana","chery","papaya"];

// for(let temp of fruit){
//     console.log(temp)
// }


 //fruit.pop();
//  for(let temp of fruit){
//     console.log(temp)
// }
//fruit.push("papaya")
//  for(let temp of fruit){
//     console.log(temp)
// }

//fruit.shift()
//  for(let temp of fruit){
//     console.log(temp)
// }
//fruit.unshift("apple")
//  for(let temp of fruit){
//     console.log(temp)
// }

// console.log(fruit.indexOf("banana"));

// console.log(fruit.includes("banaa"));



let arr=[1,2,3];
let doub= arr.map((n)=>n*2);
console.log(doub)

let fil=arr.filter((n)=>n>1);
console.log(fil)

let red=arr.reduce((acc,curr)=>acc+curr,0);
console.log(red);