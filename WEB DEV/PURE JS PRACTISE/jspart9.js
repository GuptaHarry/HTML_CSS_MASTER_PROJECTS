// practise que

//i)  a p with text that says "Hey i am red";
// ii) an h3 with blue text that says " i'm blue h3!';
// iii)  a div with black border pink background color with the following elements inside of it:
// another h1 that says "im in a div"
// a p that says "me too!"

// solution:- 
// let p1 = document.createElement('p');
// p1.innerText="Hey I'm red!";
// p1.style.backgroundColor="red";

// let con = document.querySelector('body');
// con.append(p1);

// let h3 = document.createElement('h3');
// h3.innerText="I'm a blue h3!";
// h3.style.backgroundColor="blue";
// con.append(h3);

// let div = document.createElement('div');
// div.style.border="solid";
// div.style.backgroundColor="pink";

// con.append(div);
// let h1 = document.createElement('h1');
// h1.innerText=" I'm in a div";
// div.appendChild(h1);
// let p2 = document.createElement('p');
// p2.innerText="Me Too!";
// div.appendChild(p2);


// con.appendChild(h3);



// assignmnet questions 
//q1. new input and button usingjs and dom .button innertext is clixk me

let inp = document.createElement('input');
inp.placeholder="enter text";

document.querySelector('body').append(inp);

let btn = document.createElement('button');
btn.innerText="CLick ME!";

document.querySelector('body').append(btn);

inp.setAttribute("placeholder", "username");
btn.setAttribute("id", "btn");
console.log(btn.id);
console.log(inp.placeholder);

// que 3 
let x = document.querySelector("#btn");
x.classList.add("btnstyle");



