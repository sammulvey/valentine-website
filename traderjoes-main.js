document.addEventListener("DOMContentLoaded", function () {
    const mainOptions = document.querySelectorAll(".option-image");
    const nextButton = document.getElementById("next-button");

    let selectedChoice = "";

    mainOptions.forEach(option => {
        option.addEventListener("click", function () {
            mainOptions.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");
            selectedChoice = this.getAttribute("data-choice");
            nextButton.classList.remove("hidden");
        });
    });

    nextButton.addEventListener("click", function () {
        localStorage.setItem("mainCourseChoice", selectedChoice);
        window.location.href = "traderjoes-drinks.html"; // Next step
    });
});
