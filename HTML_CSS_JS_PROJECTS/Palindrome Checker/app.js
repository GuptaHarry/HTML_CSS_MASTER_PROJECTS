const inp = document.querySelector('.inp .in');
const btn = document.querySelector('.btn');
const res = document.querySelector('.result');
const resH1 = document.querySelector('.result')
function isValid (){
    if(!inp.value){
        resH1.innerText= "enter";
        return;
    }
    else{
        const reg1 = /[\W*_\s]/g;
        let normalStr = inp.value.trim().toLowerCase().replace(reg1,"");
        let palindromeStr = "";
        for( let i = normalStr.length -1 ; i>=0; i--){
            palindromeStr+=normalStr[i];
        }
        if( normalStr === palindromeStr){
            resH1.innerText = "Is a Palindrome";
        }
        else{
            resH1.innerText ="Is not a palindrome";
        }
    }
}


btn.addEventListener("click", isValid);