document.addEventListener("DOMContentLoaded", function () {
    const activityOption = document.querySelector(".option-image:not(.locked)");
    const nextButton = document.getElementById("next-button");

    activityOption.addEventListener("click", function () {
        this.classList.add("selected");
        localStorage.setItem("activityChoice", "Yoga Class 🧘");
        nextButton.classList.remove("hidden");
    });

    nextButton.addEventListener("click", function () {
        window.location.href = "brunch.html";
    });
});
