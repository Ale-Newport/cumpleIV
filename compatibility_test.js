const questions = [
    {
        question: "¿Cuál es la comida favorita del otro?",
        answers: ["Pizza", "Sushi", "Hamburguesa", "Tacos"],
        correct: "Pizza"
    },
    {
        question: "¿Qué prefieren para una cita?",
        answers: ["Cine", "Cena", "Paseo al aire libre", "Concierto"],
        correct: "Cena"
    },
    {
        question: "¿A qué país les gustaría viajar juntos?",
        answers: ["Japón", "Francia", "Italia", "Brasil"],
        correct: "Italia"
    },
    {
        question: "¿Qué actividad prefieren hacer juntos?",
        answers: ["Ver una serie", "Salir a caminar", "Jugar videojuegos", "Ir al gimnasio"],
        correct: "Ver una serie"
    }
];

let currentQuestionIndex = 0;
let correctAnswers = 0;

function loadNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionObj = questions[currentQuestionIndex];
        document.getElementById("question").innerText = questionObj.question;
        
        const answersContainer = document.getElementById("answers");
        answersContainer.innerHTML = "";
        
        questionObj.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerText = answer;
            button.onclick = () => checkAnswer(answer, button);
            answersContainer.appendChild(button);
        });

        // Mostrar el botón "Siguiente" solo después de responder la pregunta
        document.getElementById("next-btn").style.display = "none";
    } else {
        showResults();
    }
}

function checkAnswer(selectedAnswer, button) {
    const questionObj = questions[currentQuestionIndex];
    if (selectedAnswer === questionObj.correct) {
        correctAnswers++;
        button.style.backgroundColor = "#4CAF50"; // Verde para correcto
    } else {
        button.style.backgroundColor = "#f44336"; // Rojo para incorrecto
    }

    // Bloquear todos los botones después de responder
    document.querySelectorAll("#answers button").forEach(btn => btn.disabled = true);
    
    // Mostrar el botón "Siguiente" después de contestar
    document.getElementById("next-btn").style.display = "block";
    
    currentQuestionIndex++;
}

function showResults() {
    const resultMessage = document.getElementById("result-message");
    resultMessage.style.display = "block";
    
    if (correctAnswers === questions.length) {
        resultMessage.innerText = "¡Son almas gemelas! 💖";
    } else if (correctAnswers >= questions.length / 2) {
        resultMessage.innerText = "¡Tienen una gran conexión! 😊";
    } else {
        resultMessage.innerText = "Aún tienen mucho que descubrir el uno del otro 💑";
    }

    document.getElementById("question-container").style.display = "none";
    document.getElementById("next-btn").style.display = "none";
}

document.addEventListener("DOMContentLoaded", loadNextQuestion);
