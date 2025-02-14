document.addEventListener("DOMContentLoaded", function () {
    const museumOptions = document.querySelectorAll(".option-image");
    const nextButton = document.getElementById("next-button");

    let selectedChoice = "";

    museumOptions.forEach(option => {
        option.addEventListener("click", function () {
            museumOptions.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");
            selectedChoice = this.getAttribute("data-choice");
            nextButton.classList.remove("hidden");
        });
    });

    nextButton.addEventListener("click", function () {
        localStorage.setItem("museumChoice", selectedChoice);
        window.location.href = "traderjoes.html"; // Next step
    });
});
