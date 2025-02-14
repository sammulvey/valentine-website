document.addEventListener("DOMContentLoaded", function () {
    const brunchOption = document.querySelector(".option-image:not(.locked)");
    const nextButton = document.getElementById("next-button");

    brunchOption.addEventListener("click", function () {
        this.classList.add("selected");
        localStorage.setItem("brunchChoice", "Brunch at Our Spot 🍽️");
        nextButton.classList.remove("hidden");
    });

    nextButton.addEventListener("click", function () {
        window.location.href = "post-brunch.html";
    });
});
