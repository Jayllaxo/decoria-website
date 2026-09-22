const burgerMenu = document.getElementById("burgerMenu");
const mobileMenu = document.getElementById("burgerPop");


burgerMenu.addEventListener("click", function () {

    mobileMenu.classList.toggle("show");


    if (mobileMenu.classList.contains("show")) {

        burgerMenu.innerHTML = "✕";

    } else {

        burgerMenu.innerHTML = "☰";

    }

});