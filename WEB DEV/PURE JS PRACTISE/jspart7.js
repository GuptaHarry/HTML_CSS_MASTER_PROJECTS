// write arrow function named arrayAverage that accepts an array of numbers and return the average of numbers

// const avg = (arr)=>{
//     let sum=0;
//     for (i of arr){
//         sum+=i;
//     }
//     // console.log(sum);
//     return sum;
// }


// let arr=[1,2,3,4,5];
// let x =avg(arr);
// console.log(x);


// arrow function takes single no. even or odd

// const check = n=>{
//     if (n%2==0){
//         return "even";
//         // console.log("Even");
//     }
//     else{
//         return "odd";
//         // console.log("odd");
//     }
// }

// let y  = check(35);
// console.log(y);


// q3.
// const obj ={
//     message:"hi",

//     logMessage(){
//         console.log(this.message);
//     }
// };
// // global scope aa gya isiliye undefined
// setTimeout(obj.logMessage,1000);
// // setTimeout(logMessage,1000);


// q4.

// let len=4;
// function callback(){
//     console.log(this.len);
// }

// const obj = {
//      len:5,
//      method(callback){
//         callback();
//      },
// };
                                //  ans: undefined bcz callback ke this ko callling object call krenga
                                //  and vo jab method ko call ayenga tab call honga,but method() ko call object hi kr stka hai,jiska scope global yani window hai, to undeofned ayhega ans me
// obj.method(callback,1,2);