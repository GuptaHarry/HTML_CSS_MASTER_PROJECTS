let inp = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener("click", function(){

    let li = document.createElement('li');
    li.innerText=inp.value;

    document.querySelector('ul').appendChild(li);
    let delbtn = document.createElement('button');
    delbtn.innerText="delete";
    delbtn.classList.add("delete"); // list ke child

    li.appendChild(delbtn);
    ul.appendChild(li);
    // document.querySelector('li').append(delbtn);
    inp.value="";

});


// delete op
let delbtns = document.querySelectorAll(".delete");
for ( delbtn of delbtns){
     delbtn.addEventListener("click" , function(){
      let x =this.parentElement;
          console.log(x);
          x.remove();
     })
}


