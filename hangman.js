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

function handleLetterClick(letter) {
    if (!guessedLetters.includes(letter) && attempts > 0) {
        guessedLetters.push(letter);
        if (!chosenWord.includes(letter)) attempts--;
        updateDisplayWord();
        checkGameStatus();
    }
}

const lettersContainer = document.getElementById("letters");
for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i).toLowerCase();
    const button = document.createElement("button");
    button.innerText = letter;
    button.onclick = () => handleLetterClick(letter);
    lettersContainer.appendChild(button);
}
