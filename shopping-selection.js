document.addEventListener("DOMContentLoaded", function () {
    const shoppingOptions = document.querySelectorAll(".option-image");
    const nextButton = document.getElementById("next-button");

    let selectedChoice = "";

    shoppingOptions.forEach(option => {
        option.addEventListener("click", function () {
            shoppingOptions.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");
            selectedChoice = this.getAttribute("data-choice");
            nextButton.classList.remove("hidden");
        });
    });

    nextButton.addEventListener("click", function () {
        localStorage.setItem("shoppingChoice", selectedChoice);
        window.location.href = "traderjoes.html";
    });
});
