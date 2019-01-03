const button = document.querySelector(".nav__menu-mobile__button")
const menuMobile = document.querySelector(".nav__mobile");


button.addEventListener( 'click', function(e){
    e.preventDefault();
 
    if(menuMobile.classList.contains("nav__menu-list__responsive__hidden")){
        menuMobile.classList.remove("nav__menu-list__responsive__hidden");
        menuMobile.classList.add(".nav__menu-list__visible")
    }else{
        menuMobile.classList.remove(".nav__menu-list__visible");
        menuMobile.classList.add("nav__menu-list__responsive__hidden")
    }

})

