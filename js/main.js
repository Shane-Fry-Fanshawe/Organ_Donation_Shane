
var navMenu = document.querySelector(".navBar");
var navMenuList = document.querySelector(".navList");


//Nav Transitions
function navTransition() {
    navMenu.classList.toggle("change");

    if (navMenuList.style.display == "block"){
        navMenuList.style.display = "none"
   }
   else {
        navMenuList.style.display = "block";
      }
}

navMenu.addEventListener("click", navTransition, false);
