document.addEventListener("DOMContentLoaded", function () {
    const slideContainer = document.querySelector(".slide-container");
    // slideContainer.style.transform = "0";

    // Add a slight delay before sliding in (you can adjust this value)
    setTimeout(() => {
        slideContainer.style.transform = "translateX(-2%)";
    },0); // Adjust the time as needed
});


document.addEventListener("DOMContentLoaded", function () {
    const slideLinks = document.querySelectorAll(".slide-link");

    slideLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            const slideContainer = document.querySelector(".slide-container");
            slideContainer.style.transition = "left 1s ease"; // Set the sliding animation

            // Slide the container off-screen to the left (right: 100%)
            slideContainer.style.left = "-100%";

            // Wait for the animation to complete, then redirect to the destination page
            setTimeout(() => {
                window.location.href = link.href;
            }, 2000); // Adjust the time as needed
        });
    });
});

