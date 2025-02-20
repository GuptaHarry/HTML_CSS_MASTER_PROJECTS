
let max = prompt("ENter max range");
// console.log(max);
let num = Math.floor(Math.random()*max)+1;
// console.log(num);
let guess = prompt("ENter number");
// guess = parseInt(guess);
// while(num == guess){
//     guess= prompt("ENter next no");
//     if(guess=="quit"){
//         break;
//     }
// }

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }

    if(guess==num){
        console.log("right answer");
        break;
    }
    else if(guess<num ){
        guess=prompt("number is too small");
    }
    else{
        guess = prompt("number is too big");
    }
}


//hints 
// user enter small try bigger or if given larger try for smaller;