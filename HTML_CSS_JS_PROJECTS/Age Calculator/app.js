const dateInp = document.getElementById("dateinp");
const btn =  document.getElementById("btn");
const res = document.getElementById("result");


console.log(dateInp.value);
console.log("hello")

const currentDate = new Date();
currentDate.getFullYear();
currentDate.getMonth();
currentDate.getDay();

dateInp.addEventListener("input" , ()=>{
    console.log(dateInp.value.split("-"));
    
})

function calculate(){
    // console.log(  Math.abs(currentDate.getDate() - dateInp.value.split("-") ) );
     console.log(Math.abs( currentDate.getFullYear() - dateInp.value.split("-")[0]));
    console.log( Math.abs(currentDate.getMonth()+1  - dateInp.value.split("-")[1] ) )
    console.log( currentDate.getDay()+1 - dateInp.value.split("-")[2] )

}   
btn.addEventListener("click" , calculate);


