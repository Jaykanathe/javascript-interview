// let n = 10;
// // External loop
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 1; j <= n - i; j++) {
//     process.stdout.write(' ')
//   }
//   // printing stars
//   for (let k = 0; k < 2 * i - 1; k++) {
//     process.stdout.write('*')
//   }
//   console.log();
// }



// for(let i = 1;i<=5;i++){
//     for(let j = 1;j<=i;j++){
//         process.stdout.write('*');
//     }
//     console.log();
// }


// my code of start

// for(let i = 1;i<=5;i++){
//     for( j = 5;j>i;j--){
//         process.stdout.write(' ');
//     }
//    for(let k = 0;k<2*i-1;k++){
//     process.stdout.write('*');
//    }
//      console.log();
// }


// ------------------------------------------------------INSERTING ELEMENT---------------------

// let data = [10,20,30,40,50,60];
// let position = 5;
// let NewEle = 70;
// console.log(data);
// for(let i = data.length-1;i>=0;i--){
   
//     if(i>=position){
//         data[i+1]=data[i];
//        if(i==position){
//         data[i]= NewEle;
//        }

//     }
   
// } console.log(data);

// ------------------------------------inbuild function
// data.splice(2,0,500);

// console.log(data);

//---------------------------------DELETION OF ELEMENT FROM ARRAY----------------

// let data = [10,20,30,40,50,60];
// let position = 2;

// for(let i = position;i<data.length-1;i++){
// data[i]=data[i+1];

// }
// data.length = data.length-1;

// console.log(data);

// --------------------------------------SEARCHING ELEMENT IN ARRAY-----------------------

// let data = [10,20,30,40,50,60,70,80,90];
// let item = 50;
// // let found = "";
// let index=undefined;

// for(let i=0;i<data.length;i++){
//     if(data[i]===item){
//       index = i;
//      found = data[i]
//       break;
//     }    
    
// } console.log(index);
// console.log(found)



let data  = [10,20,30,40,50];
let data2 = [60,70,80,90,100];
let data3 = [];

// for(let i=0;i<data.length;i++){
//     data3[i]=data[i];
// }
// for(let i = 0;i<data2.length;i++){
//     data3[data.length+i]=data2[i];
// }

data3 = [...data,...data2];
console.log(data3);
// console.log(data3);