const button = document.querySelector(".menu__mobile")
const menuMobile = document.querySelector(".nav__menu");


button.addEventListener( 'click', function(e){
    e.preventDefault();
 
    if(menuMobile.classList.contains("nav__menu-list__hidden")){
        menuMobile.classList.remove("nav__menu-list__hidden");
        menuMobile.classList.add("nav__menu__visible")
    }else{
        menuMobile.classList.remove("nav__menu__visible");
        menuMobile.classList.add("nav__menu-list__hidden")
    }

})

