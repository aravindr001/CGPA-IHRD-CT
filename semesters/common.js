document.addEventListener("DOMContentLoaded", function () {
    const slideContainer = document.querySelector(".container-fluid");
    // slideContainer.style.transform = "0";

    // Add a slight delay before sliding in (you can adjust this value)
    setTimeout(() => {
        slideContainer.style.transform = "translateX(-4%)";
    },0); // Adjust the time as needed
});