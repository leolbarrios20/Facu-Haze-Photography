function slide(){
    let slideValue = document.getElementById("slider").value;
    document.getElementById("my-img").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
}

function slide2(){
    let slideValue = document.getElementById("slider2").value;
    document.getElementById("my-img2").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
}

function slide3(){
    let slideValue = document.getElementById("slider3").value;
    document.getElementById("my-img3").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
}

function slide4(){
    let slideValue = document.getElementById("slider4").value;
    document.getElementById("my-img4").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
}