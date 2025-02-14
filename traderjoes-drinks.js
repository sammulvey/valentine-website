document.addEventListener("DOMContentLoaded", function () {
    const drinkOptions = document.querySelectorAll(".option-image");
    const nextButton = document.getElementById("next-button");

    let selectedChoice = "";

    drinkOptions.forEach(option => {
        option.addEventListener("click", function () {
            drinkOptions.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");
            selectedChoice = this.getAttribute("data-choice");
            nextButton.classList.remove("hidden");
        });
    });

    nextButton.addEventListener("click", function () {
        localStorage.setItem("drinkChoice", selectedChoice);
        window.location.href = "traderjoes-dessert.html"; // Next step
    });
});
