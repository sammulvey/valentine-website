document.addEventListener("DOMContentLoaded", function () {
    const activityOptions = document.querySelectorAll(".option-image");
    const nextButton = document.getElementById("next-button");

    let selectedChoice = "";

    activityOptions.forEach(option => {
        option.addEventListener("click", function () {
            activityOptions.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");
            selectedChoice = this.getAttribute("data-choice");
            nextButton.classList.remove("hidden");
        });
    });

    nextButton.addEventListener("click", function () {
        localStorage.setItem("postDinnerChoice", selectedChoice);
        window.location.href = "summary.html"; // Final Summary Page
    });
});
