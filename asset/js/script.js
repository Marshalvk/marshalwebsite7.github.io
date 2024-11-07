var typed= new Typed(".input",
    {
    strings:["data scientist"," data analyst","Big Data Engineer"],
    typeSpeed:70,
    backspeed:60,
    loop:true
})
  
// sticky-header-js
const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 0)
})

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
};
