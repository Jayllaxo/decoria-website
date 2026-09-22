// ==================================================
// BURGER MENU
// ==================================================


// Finder burger-menu knappen
const burgerMenu = document.getElementById("burgerMenu");

// Finder selve menuen
const mobileMenu = document.getElementById("burgerPop");


// Når brugeren klikker på burger-menuen
burgerMenu.addEventListener("click", function () {

    // Viser eller skjuler menuen
    mobileMenu.classList.toggle("show");


    // Tjekker om menuen er åben
    if (mobileMenu.classList.contains("show")) {

        // Hvis menuen er åben,
        // ændres burger-ikonet til et kryds
        burgerMenu.innerHTML = "✕";

    } else {

        // Hvis menuen er lukket,
        // ændres ikonet tilbage til burger-menuen
        burgerMenu.innerHTML = "☰";

    }

});