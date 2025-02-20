// que2 

// let btn = document.createElement("button");
// document.querySelector('body').append(btn);

// btn.addEventListener("click" , function(){
//     btn.style.backgroundColor="green";
//     console.log("changed to green");
// });


//  que 3 

let inp = document.createElement('input');
inp.placeholder="enter your name";

let h2 = document.createElement('h2');
h2.innerText="enter your name";

document.querySelector('body').append(inp);
document.querySelector('body').append(h2);
// input event ka use lenge

inp.addEventListener("input",function(){
         h2.innerText = inp.value.replace(/[^a-zA-Z ]/g, '');
         console.log(inp.value);
});