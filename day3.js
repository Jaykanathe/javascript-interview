// const factorial = (num) => {
//     let fact = 1;

// const { json } = require("express");

//     for(let i = 1;i<=num;i++){
//         fact = fact * i;
        
//     }
//     return fact
// }

// console.log(factorial(5));

// const average = (arr)=>{
//      let result = arr.reduce((acc,curr)=> 
//     acc + curr,0)

  

//     return result/arr.length;    
// }

// console.log(average([2,5,4,6,3,10,5]))



// const compairarr  = (arr1,arr2)=>{
    

//   let result = (JSON.stringify(arr1) === JSON.stringify(arr2));
// //   another method/

// // let result = arr1.every((curr,index) => curr === arr2[index]);


    
//     return result;


// }

// console.log(compairarr([1,2,3],[1,2,3]));

// const number = [1, 2, 3, 4, 5];

// const isEven = (number) => number % 2 === 0;


//  const allEven = number.every(isEven);


// console.log(allEven);

const sumdgite = (num) => {

    
   let result = String(num).split("").map((item)=>+item);
  
   let output = result.reduce((acc,curr)=> acc + curr,0)  

    return output

}

console.log(sumdgite(123456));