// // get elements form dom

// const form = document.querySelector('.form');
// const input= document.querySelector('.input');
// const todos = document.querySelector('.todos');


// function getToDo(value){
//     // crate new elemtns
//     let todo = document.createElement("div");
//     let text = document.createElement("span");

//     // set values and styles
//     text.innerHTML= value;

//     // aa append to dom
//     todo.appendChild(text);

//     let close= document.createElement("span");
//     close.innerHTML = "&times;"
//     close.classList.add('delete');

//   // event 
//   close.addEventListener('click', function(e){
//     todos.removeChild(todo);
//   })

//   todo.appendChild(close)
//   todo.classList.add(todo)
//   return todo;
// }


// form.addEventListener("submit" , e=>{
//     e.preventDefault()
//     let value = input.value;
//     if( !value.trim()) return;
//     todos.appendChild( getToDo(value))
//     input.value=""
// })

let form = document.querySelector("form");
let input = document.querySelector("input");
let todos = document.querySelector(".todos");

function getTodo(value) {
  // Creating New Elements
  let todo = document.createElement("div");
  let textEl = document.createElement("span");

  // Setting values & Styles
  textEl.innerHTML = value;

  // Appending Our Element To The DOM
  todo.appendChild(textEl);

  let closeEl = document.createElement("span");
  closeEl.innerHTML = "&times;";
  closeEl.classList.add("delete");

  // Attaching Events
  closeEl.addEventListener("click", function (e) {
    todos.removeChild(todo);
  });

  todo.appendChild(closeEl);
  todo.classList.add("todo");
  return todo;
}

form.addEventListener("submit", (e) => {
  // preventing the default behavior
  e.preventDefault();
  let value = input.value;
  if (!value.trim()) return;
  todos.appendChild(getTodo(value));
  input.value = "";
});