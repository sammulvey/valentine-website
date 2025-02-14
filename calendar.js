document.addEventListener("DOMContentLoaded", function () {
    const datePicker = document.getElementById("date-picker");
    const submitButton = document.getElementById("submit-date");
    const errorMessage = document.getElementById("error-message");

    // Set min and max date to only allow February 14, 2024
    datePicker.setAttribute("min", "2024-02-14");
    datePicker.setAttribute("max", "2024-02-14");

    submitButton.addEventListener("click", function () {
        if (datePicker.value === "2024-02-14") {
            window.location.href = "coffee.html"; // Move to next page
        } else {
            errorMessage.classList.remove("hidden");
        }
    });
});
