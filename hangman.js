const words = [
    { word: "amor", hint: "Lo que sentimos" },
    { word: "felicidad", hint: "Estado ideal contigo" },
    { word: "abrazo", hint: "Nos encanta darlo" }
];
let chosenWordObj = words[Math.floor(Math.random() * words.length)];
let chosenWord = chosenWordObj.word;
let displayWord = "_".repeat(chosenWord.length);
let attempts = 6;
let guessedLetters = [];

document.getElementById("wordDisplay").innerText = displayWord;
document.getElementById("hint").innerText = `Pista: ${chosenWordObj.hint}`;

function updateDisplayWord() {
    displayWord = chosenWord.split("").map(letter => guessedLetters.includes(letter) ? letter : "_").join(" ");
    document.getElementById("wordDisplay").innerText = displayWord;
}

function checkGameStatus() {
    if (displayWord.split(" ").join("") === chosenWord) {
        document.getElementById("message").innerText = "¡Ganaste! 🥳";
        document.getElementById("letters").innerHTML = "";
    } else if (attempts === 0) {
        document.getElementById("message").innerText = `Perdiste 😢. La palabra era: ${chosenWord}`;
        document.getElementById("letters").innerHTML = "";
    }
}

function handleLetterClick(button, letter) {
    button.disabled = true;  // Disable the button once clicked
    if (!guessedLetters.includes(letter) && attempts > 0) {
        guessedLetters.push(letter);
        if (!chosenWord.includes(letter)) {
            attempts--;
            drawHangman(6 - attempts);
        }
        updateDisplayWord();
        checkGameStatus();
    }
}

const lettersContainer = document.getElementById("letters");
for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i).toLowerCase();
    const button = document.createElement("button");
    button.innerText = letter;
    button.onclick = () => handleLetterClick(button, letter);
    lettersContainer.appendChild(button);
}

// Canvas Drawing Code for Hangman
const canvas = document.getElementById("hangmanCanvas");
const ctx = canvas.getContext("2d");

// Draw base structure once
function drawBaseStructure() {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#333";

    // Draw base
    ctx.beginPath();
    ctx.moveTo(10, 190);
    ctx.lineTo(90, 190);
    ctx.stroke();

    // Draw pole
    ctx.beginPath();
    ctx.moveTo(50, 190);
    ctx.lineTo(50, 20);
    ctx.stroke();

    // Draw horizontal beam
    ctx.beginPath();
    ctx.moveTo(50, 20);
    ctx.lineTo(130, 20);
    ctx.stroke();

    // Draw rope
    ctx.beginPath();
    ctx.moveTo(130, 20);
    ctx.lineTo(130, 50);
    ctx.stroke();
}

function drawHangman(step) {
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#333";

    switch (step) {
        case 1: // Draw head
            ctx.beginPath();
            ctx.arc(130, 70, 20, 0, Math.PI * 2);
            ctx.stroke();
            break;
        case 2: // Draw body
            ctx.beginPath();
            ctx.moveTo(130, 90);
            ctx.lineTo(130, 140);
            ctx.stroke();
            break;
        case 3: // Draw left arm
            ctx.beginPath();
            ctx.moveTo(130, 100);
            ctx.lineTo(110, 120);
            ctx.stroke();
            break;
        case 4: // Draw right arm
            ctx.beginPath();
            ctx.moveTo(130, 100);
            ctx.lineTo(150, 120);
            ctx.stroke();
            break;
        case 5: // Draw left leg
            ctx.beginPath();
            ctx.moveTo(130, 140);
            ctx.lineTo(110, 170);
            ctx.stroke();
            break;
        case 6: // Draw right leg
            ctx.beginPath();
            ctx.moveTo(130, 140);
            ctx.lineTo(150, 170);
            ctx.stroke();
            break;
    }
}

// Draw the base structure once at the start
drawBaseStructure();
