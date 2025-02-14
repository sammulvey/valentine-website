document.addEventListener("DOMContentLoaded", function () {
    console.log("Quiz Script Loaded!");

    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
    const nextButton = document.getElementById("next-button");

    let currentQuestionIndex = 0;
    let score = 0;

    const questions = [
        {
        type: "break", // Special type for transition screens
        message: "Okay, here we go... starting off easy. Good luck! I definitely won’t break up with you if you get everything wrong… or anything. lol... 😏",
        gif: "assets/images/mischievous-emoji.gif"
        },
        {
            question: "Where did we first meet?",
            answers: [
                { text: "A) Montreal", correct: true },
                { text: "B) New York", correct: false },
                { text: "C) North Carolina", correct: false },
                { text: "D) San Diego", correct: false }
            ],
            gif: "assets/images/canada.gif"
        },
        {
            question: "Who made the first move?",
            answers: [
                { text: "A) Sam", correct: false },
                { text: "B) Sophia", correct: true },
                { text: "C) Neither, it was destiny ✨", correct: false },
                { text: "D) Your cat Ellie 🐱", correct: false }
            ],
            gif: "assets/images/cat.gif"
        },
        {
            question: "If we had met a different way… what would you have thought of me? 😏 (Like if I randomly hit you up first, be honest)",
            answers: [
                { text: "A) Certified Fuckboy™", correct: false },
                { text: "B) Male Manipulator Core", correct: true },
                { text: "C) Mysterious & Unavailable", correct: true },
                { text: "D) Secretly a Simp", correct: false }
            ],
            gif: "assets/images/man.gif"
        }, 
        {
            question: "What was my first impression of you?",
            answers: [
                { text: "A) “She’s so cute, I’m doomed.”", correct: true },
                { text: "B) “Eh, let’s see where this goes.”", correct: false },
                { text: "C) “I should run while I still can.”", correct: false },
                { text: "D) “She looks like trouble (the fun kind).”", correct: true }
            ],
            gif: "assets/images/joker.gif"
        },
        {
            question: "What best describes my personality?",
            answers: [
                { text: "A) Golden Retriever", correct: false },
                { text: "B) Nonchalant Dreadhead", correct: true },
                { text: "C) NPC Energy", correct: false },
                { text: "D) Mysterious Sigma", correct: true }
            ],
            gif: "assets/images/nonchalant-wolf-sigma-wolf.gif"
        },
        {
            question: "What is my actual love language? ❤️",
            answers: [
                { text: "A) Physical touch", correct: true },
                { text: "B) Acts of service", correct: true },
                { text: "C) Quality time", correct: false },
                { text: "D) Words of Affirmation", correct: false },
                { text: "D) Receiving gifts", correct: false }
            ],
            gif: "assets/images/anime.gif"
        },
        {
        question: "Who would I see live in concert?",
        answers: [
            { image: "assets/images/deftones.jpg", correct: false },
            { image: "assets/images/bladee.jpg", correct: false },
            { image: "assets/images/slimesito.png", correct: true },
            { image: "assets/images/beachhouse.jpg", correct: false }
        ],
        type: "image"
        },
        {
            question: "What's my go to coffee order?",
            answers: [
                { text: "A) Black coffee, no nonsense", correct: false },
                { text: "B) Two cream, two sugar", correct: true },
                { text: "C) Something fancy and overpriced", correct: false },
                { text: "D) I never get the same thing twice", correct: false }
            ],
            gif: "assets/images/coffee-coffee-meme.gif"
        },
        {
            question: "How would you rate my rizz on a scale from 1 to 10?",
            answers: [
                { text: "A) 10 (Unspoken rizz, God’s favorite)", correct: true },
                { text: "B) 8-9 (Certified Lover Boy energy)", correct: false },
                { text: "C) 5-7 (Mid AF 💀)", correct: false },
                { text: "D) 1 (Negative rizz, actually repels women, kys loser lol)", correct: false }
            ],
            gif: "assets/images/rizzbee.gif"
        },
        {
            question: "If I were a fictional character in one of your beloved fantasy sexy books, who would I be?",
            answers: [
                { text: "A) A brooding antihero", correct: false },
                { text: "B) A sidekick who steals the show", correct: false },
                { text: "C) A background character with one iconic line", correct: false },
                { text: "D) A villain, but the kind you secretly fall in love with", correct: true }
            ],
            gif: "assets/images/nice-sigma.gif"
        },
        {
            question: "What’s my incline bench press PR? (for reps, not 1 rep max)",
            answers: [
                { text: "A) 225 lbs (Elite Status)", correct: false },
                { text: "B) 185 lbs (Respectable)", correct: true },
                { text: "C) 135 lbs (Beginner Gains)", correct: false },
                { text: "D) I have never actually seen you touch a bench press and you're weak asf lmfao 💀", correct: false }
            ],
            gif: "assets/images/cat-meme.gif"
        },
        {
            question: "If I could have any superpower, what would it be?",
            answers: [
                { text: "A) Reading your mind", correct: false },
                { text: "B) Teleporting to you whenever I miss you", correct: true },
                { text: "C) Free unlimited food forever", correct: false },
                { text: "D) Time travel to fix all my awkward moments", correct: false }
            ],
            gif: "assets/images/funfact.gif"
        },
        {
        question: "What is my favourite trader joe's item?",
        answers: [
            { image: "assets/images/minicone.jpg", correct: false },
            { image: "assets/images/banana.jpg", correct: true },
            { image: "assets/images/cheese.jpg", correct: false },
            { image: "assets/images/orange.jpg", correct: false }
        ],
        type: "image"
        },
        {
            question: "What’s my secret guilty pleasure?",
            answers: [
                { text: "A) Judging your Spotify playlists", correct: false },
                { text: "B) Watching your face when you’re super focused on something", correct: true },
                { text: "C) feet !!!!", correct: false },
                { text: "D) Stealing your phrases and making them mine (i dont gaf)", correct: false }
            ],
            gif: "assets/images/cat-cute-cat.gif"
        },
        {
        type: "break",
        message: "Wow, you made it this far? I’m honestly impressed. ight let's crank it up a notch. No pressure, fr, but your final score will determine if I still find you attractive. 😘",
        gif: "assets/images/doggy.gif"
        },
        {
            question: "What's my favourite thing about you?",
            answers: [
                { text: "A) Your smile", correct: false },
                { text: "B) Your brain", correct: false },
                { text: "C) Your butt 😏", correct: true },
                { text: "D) The way you look at me", correct: true }
            ],
            gif: "assets/images/minion.gif"
        },
        {
            question: "If I could only kiss one part of your body forever, which would I pick?",
            answers: [
                { text: "A) Lips", correct: true },
                { text: "B) Neck", correct: false },
                { text: "C) Forehead", correct: false },
                { text: "D) Cheeks", correct: false }
            ],
            gif: "assets/images/charlie.gif"
        },
        {
            question: "What’s the one thing I always roast you about?",
            answers: [
                { text: "A) Your questionable driving skills (RIP that pillar 🚗💥)", correct: false },
                { text: "B) Your obsession with vegetables (are you a rabbit?) 🥦", correct: false },
                { text: "C) Your very American tendencies 🦅🇺🇸", correct: false },
                { text: "D) That one time you threw up in my washroom the first time you visited 🤢", correct: false },
                { text: "E) Yeast", correct: false },
                { text: "F) ‼️ ALL OF THE ABOVE ‼️", correct: true }
            ],
        },
        {
        question: "Which of these pictures best represents your personality?",
        answers: [
            { image: "assets/images/patrick.gif", correct: false },
            { image: "assets/images/blackguy.gif", correct: false },
            { image: "assets/images/freak.gif", correct: false },
            { image: "assets/images/baby.gif", correct: true }
        ],
        type: "image"
        },
        {
            question: "What's my ultimate date with you?",
            answers: [
                { text: "A) We build the most insane blanket fort, stock up on every snack imaginable, make a luxurious charcuterie board, and watch movies while I pretend not to care about the rom com you picked (but am secretly super invested into it).", correct: false },
                { text: "B) We book last-minute flights to a random city, no itinerary, just playing it by ear. We get matching sunglasses at an airport gift shop, spend the day exploring, and try to find the yummiest local specialty to eat (ice cream). End the night getting lost but somehow stumbling upon the best dive bar in the city.", correct: false },
                { text: "C) We set up on a secluded hill with the perfect sunset view, a bottle of wine, and a playlist that makes it feel like the end scene of an indie movie. We feed each other strawberries dramatically, lie under the stars, and whisper about our biggest fears & dreams. Maybe we release paper lanterns into the sky (no fire hazards, I promise) or write messages to our future selves.", correct: true }            
            ],
        },
        {
        question: "Which of these selfies have you sent me before?",
        answers: [
            { image: "assets/images/selfie1.jpg", correct: true },
            { image: "assets/images/selfie2.jpg", correct: true },
            { image: "assets/images/selfie3.jpg", correct: true },
            { image: "assets/images/selfie4.jpg", correct: true },
            { image: "assets/images/selfie5.jpg", correct: true },
            { image: "assets/images/selfie6.jpg", correct: true }
        ],
        type: "image"
        },
        {
        type: "break",
        message: "that was a trick question!!! you've sent me them all but you probably already knew that haha lolz :)",
        gif: "assets/images/deez-ha.gif"
        },
        {
        question: "if freakbob calling are you picking up ???",
        answers: [

                { text: "A) YES!!!", correct: true },
                { text: "B) no....", correct: false }
            ],
            gif: "assets/images/spongebob-freaky-bob.gif"
        },
        {
            question: "What’s the most “us” thing we’ve ever done?",
            answers: [
                { text: "A) Argued over the dumbest thing, then cuddled like nothing happened", correct: false },
                { text: "B) Spent way too long deciding what to eat, then ended up at the same place as always (In n Out)", correct: false },
                { text: "C) Staying up way too late just to talk on the phone to eachother", correct: true },
                { text: "D) Turning something ordinary into a whole adventure", correct: false }
            ],
            gif: "assets/images/cat-cat-love.gif"
        },
        {
            question: "Which of these “crimes” have you committed the MOST in our relationship?",
            answers: [
                { text: "A) Rolling onto my side of the bed until I have exactly 3 inches left to sleep on", correct: false },
                { text: "B) Taking 100 years to pick an outfit before we go out (then changing again)", correct: true },
                { text: "C) Making the shower a full steam room before I have to use it", correct: false },
                { text: "D) Somehow always having your cold feet touch me first when we cuddle", correct: false }
            ],
            gif: "assets/images/cat-funny.gif"
        },
        {
        question: "Which of these was the best food we ever ate together?",
        type: "image",
        answers: [

            { image: "assets/images/mozz.jpg", correct: true },
            { image: "assets/images/beaver.jpg", correct: false },
            { image: "assets/images/sushi.jpg", correct: false },
            { image: "assets/images/whits.jpg", correct: false },
            { image: "assets/images/innout.jpg", correct: false }
            ],
            gif: "assets/images/yellow.gif"
        },
        {
        type: "break",
        message: "Okay, economist, let’s put that UNC degree to the test!!!",
        gif: "assets/images/unc-goheels.gif"
        },   
        {
            question: "What’s one thing about you that I think is extremely attractive?",
            answers: [
                { text: "A) The way your eyes light up when you talk about something you love", correct: false },
                { text: "B) Your confidence when you walk into a room (even if you don’t notice it)", correct: true },
                { text: "C) How you somehow make even the most basic outfit look hot", correct: false },
                { text: "D) The fact that you can cheer me up even when I’m in the worst mood", correct: false }
            ],
            gif: "assets/images/wrizz-monkey-monkey.gif"
        },
        {
            question: "What’s the little habit you do that I find insanely cute?",
            answers: [
                { text: "A) The way you talk with your hands when you get excited", correct: false },
                { text: "B) How your cheeks get ridiculously red sometimes (like, full-on blushing for no reason)", correct: true },
                { text: "C) The way you start twerking every time we're lying in bed together (get it gurl)", correct: false },
                { text: "D) How you steal my hoodies like they belong to you (they kind of do now lol)", correct: false }
            ],
            gif: "assets/images/twerken-twerk.gif"
        },
        {
            question: "What’s one way you make my life better?",
            answers: [
                { text: "A) You make me laugh", correct: false },
                { text: "B) You make me feel cared for", correct: false },
                { text: "C) When I look at you it reminds me to be present and enjoy the moment", correct: false },
                { text: "D) All of the above (say this one or else 💀)", correct: true }
            ],
        },
        {
            question: "What’s something I would never change about you?",
            answers: [
                { text: "A) The way you care so deeply, even when you don’t realize it", correct: true },
                { text: "B) Your weird little quirks that make you you", correct: true },
                { text: "C) Your chaotic energy that somehow balances mine perfectly", correct: true },
                { text: "D) Nothing, because you’re literally perf just the way you are", correct: true }
            ],
            gif: "assets/images/nuh-uh-cat.gif"
        },
        {
        question: "Which starter pack best describes your aesthetic?",
        type: "image",
        answers: [

            { image: "assets/images/1.jpg", correct: false },
            { image: "assets/images/2.png", correct: true },
            { image: "assets/images/3.jpg", correct: false },
            { image: "assets/images/4.jpg", correct: true },
            { image: "assets/images/6.jpg", correct: false }
            ],
        },
        {
        question: "Which of these is your TRUEST form? 🤡😂 Be honest with yourself. 😈",
        type: "image",
        answers: [

            { image: "assets/images/funny1.jpg", correct: true },
            { image: "assets/images/funny2.jpg", correct: true },
            { image: "assets/images/funny3.jpg", correct: true },
            { image: "assets/images/funny4.jpg", correct: true }
            ],
            gif: "assets/images/lolz.gif"
        },
        {
        type: "break",
        message: "Alright, I admit it. I was just playing… but in all seriousness? You’re the most beautiful girl I’ve ever seen 😘",
        gif: "assets/images/smooth.gif"
        },
        {
        question: "Okay, okay… but which of these actually makes me lose my mind every time I see you? 😍🔥",
        type: "image",
        answers: [
            { image: "assets/images/stunning1.jpg", correct: true },
            { image: "assets/images/stunning2.jpg", correct: true },
            { image: "assets/images/stunning3.jpg", correct: true },
            { image: "assets/images/stunning4.jpg", correct: true }
        ],
        gif: "assets/images/jaw-drop-mask.gif"
        },
        {
            question: "What’s something I’ve never said out loud, but you should already know?",
            answers: [
                { text: "A) You make my life feel bigger, and I didn’t think that was possible", correct: true },
                { text: "B) I notice everything about you, even the little things you think no one does", correct: true },
                { text: "C) If I had to pick a favourite place, it would just be next to you", correct: true },
                { text: "D) I’ll always choose you, even in the smallest ways", correct: true }
            ],
            gif: "assets/images/cute-cat-love.gif"
        },
        {
            question: "If I could freeze one moment of us together forever, what would it be?",
            answers: [
                { text: "A) That morning we walked across the Manhattan Bridge at sunrise, watching the city wake up", correct: false },
                { text: "B) Lying in the sun together at the Rockcliffe Boathouse Marina, feeling like time stopped for a bit", correct: false },
                { text: "C) Sitting on the rocks in Central Park, doing absolutely nothing but loving it anyway", correct: false },
                { text: "D) Sitting on the beach in San Diego, watching the sun melt into the ocean", correct: false },
                { text: "E) That night when you picked me up in Virginia from the airport, and suddenly, everything felt right again", correct: true}
            ],
        },
        {
        type: "break",
        message: "This is it. The final question. Everything has led to this very moment right here. Your entire relationship. Your entire existence. All for this one question. No pressure.",
        gif: "assets/images/concerned-sweat-droplets.gif"
        },
        {
        question: "Which is better? Choose wisely.",
        answers: [
            { image: "assets/images/usaflag.png", correct: false },
            { image: "assets/images/canada.jpg", correct: true }
        ],
        type: "image"
        },
        
        // Add more questions as needed
    ];

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];

    // If it's a break page, show message instead of question
    if (currentQuestion.type === "break") {
        questionText.innerText = currentQuestion.message;
        answerButtons.innerHTML = ""; // Remove answer buttons

        if (currentQuestion.gif) {
            const gifImg = document.createElement("img");
            gifImg.src = currentQuestion.gif;
            gifImg.classList.add("question-gif");
            answerButtons.appendChild(gifImg);
        }

        nextButton.style.display = "block";
        return;
    }

    // Otherwise, show normal question
    questionText.innerText = currentQuestion.question;

    if (currentQuestion.type === "image") {
        // If the question has image-based answers, use grid layout
        answerButtons.classList.add("image-answers"); // Apply grid layout

        currentQuestion.answers.forEach(answer => {
            const imgButton = document.createElement("img");
            imgButton.src = answer.image;
            imgButton.classList.add("image-answer");
            imgButton.addEventListener("click", () => selectAnswer(answer));
            answerButtons.appendChild(imgButton);
        });
    } else {
        // Normal text-based multiple-choice question
        answerButtons.classList.remove("image-answers"); // Remove grid if it was applied before

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerText = answer.text;
            button.classList.add("answer-button");
            button.addEventListener("click", () => selectAnswer(answer));
            answerButtons.appendChild(button);
        });
    }

    // Display GIF if available
    if (currentQuestion.gif) {
        const gifImg = document.createElement("img");
        gifImg.src = currentQuestion.gif;
        gifImg.classList.add("question-gif");
        answerButtons.appendChild(gifImg);
    }
}


    function resetState() {
        nextButton.style.display = "none";
        answerButtons.innerHTML = "";
    }

    function selectAnswer(answer) {
    const buttons = document.querySelectorAll(".answer-button, .image-answer");
    buttons.forEach(button => {
        button.disabled = true;

        if (button.innerText === answer.text || button.src === answer.image) {
            button.classList.add(answer.correct ? "correct" : "wrong");
        } else {
            button.classList.add("disabled");
        }
    });

    if (answer.correct) {
        score++;
    }

    nextButton.style.display = "block";
}


    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }
    });

    function showResults() {
        resetState();
        const totalQuestions = questions.filter(q => q.question).length; // Counts only questions, excludes breaks
        questionText.innerText = `Quiz Complete! 🎉 You scored ${score} out of ${totalQuestions}.`;

        if (score === totalQuestions) {
    questionText.innerHTML += `<br>🥇 <strong>PERFECT SCORE!</strong> You are <strong>the ultimate girlfriend</strong>! 💖 <br> Either you cheated (👀), or you just <strong>know me that well</strong>. 😘`;
} else if (score >= totalQuestions * 0.8) {
    questionText.innerHTML += `<br>🔥 <strong>Almost perfect!</strong> You <strong>really</strong> get me, and I fw that fr. 😉 <br> You did well... but I might still have to test you later. 😏`;
} else if (score >= totalQuestions * 0.6) {
    questionText.innerHTML += `<br>🤔 <strong>Solid effort!</strong> You got most of it right, but... I see a <strong>few red flags.</strong> 🚩👀 <br> Do we need to schedule a relationship talk? 😆`;
} else if (score >= totalQuestions * 0.4) {
    questionText.innerHTML += `<br>😬 <strong>Uh oh…</strong> This was a <strong>little rough</strong>, not gonna lie. <br> Did we just meet <strong>yesterday</strong> or something?! <br> I still like you... but we might need to <strong>have a talk.</strong> 😂`;
} else {
    questionText.innerHTML += `<br>💀 <strong>Are we even dating??</strong> This was <strong>an actual disaster.</strong> <br> You’re lucky you’re cute because <strong>wow.</strong> <br> I might have to... 💀`;
}


        nextButton.innerText = "Next Page";
        nextButton.style.display = "block";
        nextButton.onclick = () => {
            window.location.href = "calendar.html"; // Update with the actual next page
        };
    }

    showQuestion();
});
