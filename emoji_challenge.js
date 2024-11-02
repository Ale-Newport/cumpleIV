const emojiChallenges = [
    { emojis: "", answer: "" },
    { emojis: "🏖️🌅", answer: "Vacaciones en la playa" },
    { emojis: "🎥🍿", answer: "Noche de cine" },
    { emojis: "🎂🎉", answer: "Cumpleaños" },
    { emojis: "🌹💕", answer: "Amor y flores" },
    { emojis: "✈️🇦🇺", answer: "Viaje a Japón" },
    { emojis: "🏠🍝❤️", answer: "Cena en casa" },
];

let currentChallengeIndex = 0;

function loadNextEmoji() {
    if (currentChallengeIndex < emojiChallenges.length) {
        document.getElementById("emoji-sequence").innerText = emojiChallenges[currentChallengeIndex].emojis;
        document.getElementById("feedback").innerText = "";
        document.getElementById("answer-input").value = "";
        document.getElementById("next-btn").style.display = "none";
    } else {
        showFinalMessage();
    }
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer-input").value.trim().toLowerCase();
    const correctAnswer = emojiChallenges[currentChallengeIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").innerText = "¡Correcto! 🎉";
        document.getElementById("next-btn").style.display = "block";
        currentChallengeIndex++;
    } else {
        document.getElementById("feedback").innerText = "Inténtalo de nuevo 😅";
    }
}

function showFinalMessage() {
    document.getElementById("emoji-sequence").style.display = "none";
    document.getElementById("answer-input").style.display = "none";
    document.getElementById("feedback").innerText = "¡Desafío completado! 🌟 Eres un experto en emojis ❤️";
    document.getElementById("next-btn").style.display = "none";
}

// Iniciar el juego al cargar la página
document.addEventListener("DOMContentLoaded", loadNextEmoji);
