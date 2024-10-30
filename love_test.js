const questions = [
    { question: "¿Dónde fue nuestra primera cita?", answers: ["Parque", "Cine", "Restaurante"], correct: "Cine" },
    { question: "¿Cuál es mi flor favorita?", answers: ["Rosa", "Tulipán", "Girasol"], correct: "Rosa" },
    { question: "¿Qué día comenzamos a salir?", answers: ["14 de Febrero", "20 de Abril", "10 de Junio"], correct: "10 de Junio" }
];
let currentQuestionIndex = 0;

function loadNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionObj = questions[currentQuestionIndex];
        document.getElementById("question").innerText = questionObj.question;
        
        const answersContainer = document.getElementById("answers");
        answersContainer.innerHTML = "";
        
        questionObj.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerText = answer;
            button.onclick = () => checkAnswer(answer);
            answersContainer.appendChild(button);
        });
    } else {
        document.getElementById("result-message").innerText = "¡Test completado! Eres el/la mejor 💖";
        document.getElementById("next-btn").style.display = "none";
    }
}

function checkAnswer(selectedAnswer) {
    const questionObj = questions[currentQuestionIndex];
    if (selectedAnswer === questionObj.correct) {
        document.getElementById("result-message").innerText = "¡Correcto! 😊";
    } else {
        document.getElementById("result-message").innerText = "Ups, respuesta incorrecta 😅";
    }
    currentQuestionIndex++;
}

document.addEventListener("DOMContentLoaded", loadNextQuestion);
