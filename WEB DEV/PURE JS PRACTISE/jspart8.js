// que-1
// let arr = [1,2,3,4,5];
// let arr = [1, 2, 3, 4, 5];

// // Step 1: Square each element
// let squaredArr = arr.map(el => el * el);

// // Step 2: Sum all squared elements
// let sumOfSquares = squaredArr.reduce((sum, el) => sum + el, 0);

// // Step 3: Calculate the average
// let average = sumOfSquares / arr.length;

// console.log("Squared Array:", squaredArr);        // Output: [1, 4, 9, 16, 25]
// console.log("Sum of Squares:", sumOfSquares);     // Output: 55
// console.log("Average:", average);                 // Output: 11

// console.log(y);
// // using foreach
// let sum=0;
// let x = arr.forEach( (i)=>{
//      sum+=(i*i);
// })
// console.log(sum/5);

// // que-2
// let arr=[1,2,3,4,5];

// let newArr = arr.map( (x)=>{
//      return x+=5;
// })
// console.log(newArr);

// q-3 
// let arr = ["a","b","c"];

// let newArr = arr.map( (i)=>{
//     return i.toUpperCase();
// })
// ;

// console.log(newArr);



// //q-4
// function doubleAndReturnArgs(arr , ...args){
 
//       let newArr = arr;
//       args = args.map( (a)=>{
//         return 2*a;
//       })         
//     //   newArr+=args;
//     newArr.push(...args);
//       console.log(newArr);
// }
// let arr = [ 1,2];
// doubleAndReturnArgs(arr,3,4);


// q-5

// const ob1={
//     name:"a",
//     age:34
// };
// const ob2={
//     city:"ngp",
//     state:"maha",
//     name:"b"
// }

// function mergeObjects(ob1,ob2){
//     const ob3 ={...ob1,...ob2};
//      console.log(ob3);
// }
// mergeObjects(ob1,ob2);