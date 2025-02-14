document.addEventListener("DOMContentLoaded", function () {
    const summaryText = document.getElementById("summary-text");
    const pleadingButton = document.getElementById("pleading-button");

    const dateChoice = "February 14th ❤️"; // Since it's the only option
    const coffeeChoice = localStorage.getItem("coffeeChoice") || "Some delicious morning coffee ☕";
    const activityChoice = localStorage.getItem("activityChoice") || "Yoga 🧘";
    const brunchChoice = localStorage.getItem("brunchChoice") || "A delicious brunch 🍽️";
    const postBrunchChoice = localStorage.getItem("postBrunchActivity") || "A fun adventure 🏙️";
    const museumChoice = localStorage.getItem("museumChoice") || "";
    const shoppingChoice = localStorage.getItem("shoppingChoice") || "";
    const traderJoesChoice = localStorage.getItem("appetizerChoice") || "A tasty appetizer 🍽️";
    const mainCourseChoice = localStorage.getItem("mainCourseChoice") || "A delicious main dish 🍝";
    const drinkChoice = localStorage.getItem("drinkChoice") || "Some fancy wine 🍷";
    const dessertChoice = localStorage.getItem("dessertChoice") || "Something sweet 🍰";
    const postDinnerChoice = localStorage.getItem("postDinnerChoice") || "A magical night ✨";

    let extraDetails = "";
    if (museumChoice) {
        extraDetails += `<br>🎨 <b>Museum we’re visiting:</b> ${museumChoice}.`;
    }
    if (shoppingChoice) {
        extraDetails += `<br>🛍️ <b>What I'm getting you on our shopping spree:</b> ${shoppingChoice}.`;
    }

    summaryText.innerHTML = `
        📅 <b>Date Chosen:</b> ${dateChoice}.
        <br>☕ <b>Morning Coffee:</b> ${coffeeChoice}.
        <br>🧘 <b>First Activity:</b> ${activityChoice}.
        <br>🥞 <b>Brunch Spot:</b> ${brunchChoice}.
        <br>🚀 <b>Post-Brunch Adventure:</b> ${postBrunchChoice}.
        ${extraDetails}
        <br>🛒 <b>Trader Joe’s Run:</b> ${traderJoesChoice}.
        <br>🍝 <b>Main Course:</b> ${mainCourseChoice}.
        <br>🍷 <b>Wine Choice:</b> ${drinkChoice}.
        <br>🍰 <b>Dessert Plan:</b> ${dessertChoice}.
        <br>🌙 <b>How we end the night:</b> ${postDinnerChoice}.
        <br><br>💘 <b>This is gonna be the best Valentine’s Day ever!</b> 😘
    `;

    // Handle Click Me 🥺 Button
    pleadingButton.addEventListener("click", function () {
        window.location.href = "final-page.html"; // Redirects to the final page
    });
});

// Restart function
function restart() {
    localStorage.clear();
    window.location.href = "calendar.html"; // Restart from the beginning
}



