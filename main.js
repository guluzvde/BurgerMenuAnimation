const menuBtn = document.querySelector(".menu");
const body = document.querySelector(".body")
const link =document.querySelector("cont");
let menuOpen = false;
menuBtn.addEventListener("click",()=>{
    if (!menuOpen){
        menuBtn.classList.add('open');

        menuOpen =true;
        body.classList.add("red");
    }else{
        menuBtn.classList.remove('open');

        menuOpen=false;
        body.classList.remove("red");
    }
})

