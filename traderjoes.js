document.addEventListener("DOMContentLoaded", function () {
    const appetizerOptions = document.querySelectorAll(".option");
    const nextButton = document.getElementById("next-button");

    let selectedChoice = "";

    appetizerOptions.forEach(option => {
        option.addEventListener("click", function () {
            // Remove selection from all options
            appetizerOptions.forEach(opt => opt.classList.remove("selected"));
            
            // Add selection to clicked option
            this.classList.add("selected");
            
            // Retrieve the data-choice value from the image inside the option div
            selectedChoice = this.querySelector(".option-image").getAttribute("data-choice");
            
            // Show the next button
            nextButton.classList.remove("hidden");
        });
    });

    nextButton.addEventListener("click", function () {
        if (selectedChoice) {  // Ensure a choice was made
            localStorage.setItem("appetizerChoice", selectedChoice);
            window.location.href = "traderjoes-main.html"; // Go to the next page
        } else {
            alert("Pick an appetizer before moving on! 😋");
        }
    });
});
