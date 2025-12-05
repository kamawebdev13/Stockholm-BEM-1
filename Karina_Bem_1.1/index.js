

const headerBurger = document.querySelector(".header__burger")

const menuResponsive = document.querySelector(".header__responsive__menu")



headerBurger.addEventListener("click", () => {

    headerBurger.classList.toggle("open")

    menuResponsive.classList.toggle("open")



})