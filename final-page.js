document.addEventListener("DOMContentLoaded", function () {
    const heartButton = document.getElementById("open-letter");
    const letter = document.getElementById("love-note");

    heartButton.addEventListener("click", function () {
        letter.classList.add("show"); // Make letter visible
        heartButton.style.display = "none"; // Hide heart after clicking
    });
});
