const password1 = document.getElementById("password");
const length = Math.floor(Math.random()*20);
const upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const loweCase ="abcdefghijklmnopqrstuvwxyz";
const symbol = "!@#$%^&*()_+{}:";
const numb = "0123456789";
const allChars = upperCase + loweCase +symbol;

function createPass (){
    let pass="";
    pass += upperCase[Math.floor(Math.random()*upperCase.length)];
    pass += loweCase[Math.floor(Math.random()*loweCase.length)];
    pass += symbol[Math.floor(Math.random()*symbol.length)];

    pass += numb[Math.floor(Math.random()*numb.length)];
  while ( length > pass.length){
    pass+=  allChars[Math.floor(Math.random()*allChars.length)];

  }
  password1.value= pass;
  
}