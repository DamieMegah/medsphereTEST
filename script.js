// hamburger

let hiddenMenu = document.querySelector('.nav-links');
let hamburger = document.querySelector('.ham-menu');

document.querySelector('.ham-menu').onclick = ()=>{
    hiddenMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}
