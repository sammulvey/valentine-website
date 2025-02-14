document.addEventListener("DOMContentLoaded", function () {
    const dessertOptions = document.querySelectorAll(".option-image");
    const nextButton = document.getElementById("next-button");

    let selectedChoice = "";

    dessertOptions.forEach(option => {
        option.addEventListener("click", function () {
            dessertOptions.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");
            selectedChoice = this.getAttribute("data-choice");
            nextButton.classList.remove("hidden");
        });
    });

    nextButton.addEventListener("click", function () {
        localStorage.setItem("dessertChoice", selectedChoice);
        window.location.href = "post-dinner-activity.html"; // Next step
    });
});
