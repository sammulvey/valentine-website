document.addEventListener("DOMContentLoaded", function () {
    const coffeeOptions = document.querySelectorAll(".option-image");
    const nextButton = document.getElementById("next-button");

    let selectedChoice = "";

    coffeeOptions.forEach(option => {
        option.addEventListener("click", function () {
            // Remove highlight from all
            coffeeOptions.forEach(opt => opt.classList.remove("selected"));

            // Highlight selected option
            this.classList.add("selected");
            selectedChoice = this.getAttribute("data-choice");

            // Show next button
            nextButton.classList.remove("hidden");
        });
    });

    nextButton.addEventListener("click", function () {
        localStorage.setItem("coffeeChoice", selectedChoice);
        window.location.href = "yoga.html"; // Move to the next page
    });
});
