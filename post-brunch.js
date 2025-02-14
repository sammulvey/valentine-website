document.addEventListener("DOMContentLoaded", function () {
    const activityOptions = document.querySelectorAll(".option-image");
    const nextButton = document.getElementById("next-button");

    let selectedChoice = "";

    activityOptions.forEach(option => {
        option.addEventListener("click", function () {
            // Remove highlight from all
            activityOptions.forEach(opt => opt.classList.remove("selected"));

            // Highlight selected option
            this.classList.add("selected");
            selectedChoice = this.getAttribute("data-choice");

            // Show next button
            nextButton.classList.remove("hidden");
        });
    });

    nextButton.addEventListener("click", function () {
        localStorage.setItem("postBrunchActivity", selectedChoice);

        if (selectedChoice === "Museum Visit 🖼️") {
            window.location.href = "museum-selection.html";
        } else if (selectedChoice === "Shopping Spree 💳") {
            window.location.href = "shopping-selection.html";
        } else {
            window.location.href = "traderjoes.html"; // Everything else leads here
        }
    });
});
