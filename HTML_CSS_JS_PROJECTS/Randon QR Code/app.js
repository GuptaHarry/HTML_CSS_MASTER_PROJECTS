const imgQr = document.getElementById('imgQr');
const inpTxt = document.getElementById("inp");



function Generate (){
    if(inpTxt.value.length > 0){
        imgQr.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inpTxt.ariaValueMax;
        imgQr.classList.add("#imgQr");
    }
    else{
        imgQr.src= "th.jpg";
    }
}