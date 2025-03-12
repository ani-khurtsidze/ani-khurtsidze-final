let burger_menu = document.querySelector(".burger_menu");
let xMark = document.querySelector(".xMark")
let mobileMenu = document.querySelector(".header_nav")

burger_menu.addEventListener("click", ()=>{
mobileMenu.classList.add("show")
xMark.style.display="block";
burger_menu.style.display="none";});

xMark.addEventListener("click", ()=>{
    mobileMenu.classList.remove("show")
    xMark.style.display="none";
    burger_menu.style.display="block";});