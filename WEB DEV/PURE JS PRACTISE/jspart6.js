// console.log("hello");


// Qs1. Write a JavaScript function that returns array elements larger than a number.
// 

// function large( arr , num ){
//    let ans=[];
//     for (i of arr){
//     if(i>num){
//         ans.push(arr);
//     }
//    }
//    return ans;
// }

// arr = [2,4,5,6,7,8,9,10];
// num =1;
// ans = large(arr,num);
// console.log(ans);


// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

// function check(str){
      
//     let ans=[];
//     for (i in str){
//         if( !ans.includes(str[i]) ){
//             ans.push(str[i]);
//         }
//     }
//     console.log(ans);
// }

// str = "abcdabcdefgggh";
// check (str);


// Qs3. Write a JavaScript function that accepts a list of country names as input and 
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output : 
// "United States of America"

 country = ["Australia", "Germany", "United States of America"] ;
 
 function longest(arr){
    let max = arr[0];
   for ( let i=1 ; i<arr.length;i++){
    if(arr[i].length>max.length){
        max = arr[i];
    }
   }
   console.log(max);
 }

 longest(country);

