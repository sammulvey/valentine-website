document.addEventListener("DOMContentLoaded", function () {
    // ==========================
    // 🔒 PASSWORD SCREEN LOGIC (Only on index.html)
    // ==========================
    if (document.getElementById("password-screen")) {
        let attempts = 0;
        const errorSound = document.getElementById("error-sound");

        function checkPassword() {
            const password = document.getElementById("password-input").value;
            const correctPassword = "20241221"; // Change this to the actual password
            const fakePassword = "iloveyou"; // Fake password that gives a hint
            const errorMessage = document.getElementById("error-message");

            if (password === correctPassword) {
                window.location.href = "valentine.html"; // Redirect to Valentine's page
            } else if (password === fakePassword) {
                errorMessage.style.display = "block";
                errorMessage.innerHTML = "🤔 Hmm... that was close! Check the **first page** of your Valentine’s card for the real password. 😉";
            } else {
                attempts++;
                errorMessage.style.display = "block";
                errorSound.play(); // Play the error sound on wrong password

                if (attempts === 3) {
                    errorMessage.innerHTML = "🚨 Too many failed attempts! Here's a hint: **Think of our anniversary.** 😉";
                }
                if (attempts === 5) {
                    document.getElementById("password-screen").innerHTML = `
                        <h2>😂 Nice try!</h2>
                        <p>Okay, okay, here’s the real hint: **Our first trip together.** 🏖️</p>
                        <img src="assets/images/funny-meme.gif" width="300">
                    `;
                }
            }
        }

        const passwordButton = document.querySelector("#password-screen button");
        if (passwordButton) {
            passwordButton.addEventListener("click", checkPassword);
        }
    }

    // ==========================
    // 💘 VALENTINE PAGE LOGIC (Only on valentine.html)
    // ==========================
    if (document.getElementById("valentine-gif")) {
        const noButton = document.getElementById("no-btn");
        const yesButton = document.getElementById("yes-btn");

        // 🎭 "No" Button Moves When Hovered
        if (noButton) {
            noButton.addEventListener("mouseover", function () {
                const x = Math.random() * (window.innerWidth - noButton.clientWidth);
                const y = Math.random() * (window.innerHeight - noButton.clientHeight);
                noButton.style.position = "absolute";
                noButton.style.left = `${x}px`;
                noButton.style.top = `${y}px`;
            });

            // 🔄 Clicking "No" redirects to "Yes"
            noButton.addEventListener("click", function () {
                yesButton.click();
            });
        }

        // 🎉 Confetti Effect When Clicking "Yes"
        if (yesButton) {
            yesButton.addEventListener("click", function () {
                alert("🌟YIPPEEEEEEEEE! WOW! AMAZING! INCREDIBLE! 🥰 You are my Valentine! 💖");
                confettiEffect(); // Trigger confetti animation
                setTimeout(() => {
                    window.location.href = "playlist.html"; // Redirect after animation
                }, 3000); // Delay for confetti animation
            });
        }

        // ✨ Wiggle Effect on GIF Hover
        const valentineGif = document.getElementById("valentine-gif");
        if (valentineGif) {
            valentineGif.addEventListener("mouseover", function () {
                valentineGif.classList.add("wiggle");
            });

            valentineGif.addEventListener("mouseout", function () {
                valentineGif.classList.remove("wiggle");
            });
        }
    }

    // ==========================
    // 🎆 CONFETTI FUNCTION
    // ==========================
    function confettiEffect() {
        const confettiSettings = {
            target: 'confetti-canvas',
            max: 250,
            size: 2,
            animate: true,
            props: ["circle", "square", "triangle", "line"],
            colors: [[255, 99, 132], [54, 162, 235], [255, 205, 86]],
            clock: 50,
            rotate: true,
            start_from_edge: true,
            respawn: false
        };

        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        setTimeout(() => {
            confetti.clear();
        }, 3000);
    }

    // ==========================
    // ⏳ PAGE LOADING TRANSITION EFFECT
    // ==========================
    window.addEventListener("load", function () {
        const loadingScreen = document.getElementById("loading-screen");
        if (loadingScreen) {
            setTimeout(() => {
                loadingScreen.style.opacity = "0";
                setTimeout(() => {
                    loadingScreen.style.display = "none";
                }, 500);
            }, 1000);
        }
    });

    window.onload = function () {
        console.log("JavaScript Loaded!");

        const cityOrder = ["montreal", "ottawa", "new-york", "north-carolina", "toronto", "san-diego"];
        let currentIndex = 0;

        function unlockNextCity() {
            if (currentIndex < cityOrder.length - 1) {
                currentIndex++;
                const nextCity = document.getElementById(cityOrder[currentIndex]);
                if (nextCity) {
                    nextCity.classList.remove("locked");
                    nextCity.classList.add("unlocked");
                    console.log(`Unlocked: ${cityOrder[currentIndex]}`);
                }
            } else {
                console.log("All cities unlocked! Showing continue button.");
                document.getElementById("continue-button").classList.remove("hidden");
            }
        }

        function showCollage(city) {
            console.log(`Clicked on: ${city}`);
            const collagePopup = document.getElementById("collage-popup");
            const collageTitle = document.getElementById("collage-title");
            const collageImages = document.getElementById("collage-images");

            const collages = {
                "montreal": ["assets/images/montreal1.jpg", "assets/images/montreal2.jpg"],
                "ottawa": ["assets/images/gus1.jpg", "assets/images/gus2.jpg"],
                "new-york": ["assets/images/ny1.jpg", "assets/images/ny2.jpg"],
                "north-carolina": ["assets/images/nc1.jpg", "assets/images/nc2.jpg"],
                "toronto": ["assets/images/toronto1.jpg", "assets/images/toronto2.jpg"],
                "san-diego": ["assets/images/sandiego1.jpg", "assets/images/sandiego2.jpg"]
            };

            collageTitle.innerText = `📍 Memories from ${city.replace("-", " ")}`;
            collageImages.innerHTML = collages[city].map(img => `<img src="${img}" width="200">`).join("");

            collagePopup.style.display = "block";
            unlockNextCity();
        }

        // Set initial state: Only Montreal clickable
        cityOrder.forEach((city, index) => {
            const cityElement = document.getElementById(city);
            if (cityElement) {
                if (index !== 0) cityElement.classList.add("locked");
                cityElement.addEventListener("click", function () {
                    if (!this.classList.contains("locked")) {
                        showCollage(city);
                    }
                });
            } else {
                console.warn(`Element not found: ${city}`);
            }
        });

        // Close collage popup
        document.getElementById("close-collage").addEventListener("click", function () {
            document.getElementById("collage-popup").style.display = "none";
        });

        // Function for the button to go to the next page
        document.getElementById("continue-button").addEventListener("click", function () {
            window.location.href = "quiz.html";
        });
    };
});





