const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const res = document.getElementById("result");
function calRoman(){
 let num =  inp.value;
const key = [ "M" , "CM" , "D", "CD","C","XC","L","XL","X","IX","V" , "IV"  ,"I"];
const val = [ 1000,900,500,400,100,90,50,40,10,9,5,4,1];

let str="";

if( num > 0 &&  num <= 3999){

    for( let i=0 ; i< key.length ; i++){
        while(num >= val[i]){
            str+=key[i];
            num-=val[i];
        }
    }

    

console.log(str)
res.innerText = str;
inp.value="";
}
else{
    alert("Please enter valid range");
}
}


btn.addEventListener("click" , calRoman);