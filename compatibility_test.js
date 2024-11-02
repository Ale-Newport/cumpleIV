const questions = [
    {
        question: "¿Cuál es mi comida favorita?",
        answers: ["tortilla", "tostada", "hamburguesa", "queque"],
        correct: "tortilla"
    },
    {
        question: "¿Qué prefiero para una cita?",
        answers: ["cena", "cine", "paseo", "concierto"],
        correct: "cine"
    },
    {
        question: "¿A dónde me gustaría viajar contigo?",
        answers: ["japón", "francia", "italia", "US"],
        correct: "US"
    },
    {
        question: "¿Qué actividad prefiero hacer contigo?",
        answers: ["ver una serie", "salir a caminar", "jugar videojuegos", "ir al gimnasio"],
        correct: "jugar videojuegos"
    },
    {
        question: "¿Qué tipo de películas prefiero?",
        answers: ["terror", "comedia", "ciencia ficción", "acción"],
        correct: "comedia"
    },
    {
        question: "¿Cuál es mi color favorito?",
        answers: ["azul", "rojo", "verde", "morado"],
        correct: "azul"
    },
    {
        question: "¿Cuál es mi estación del año favorita?",
        answers: ["verano", "invierno", "primavera", "otoño"],
        correct: "verano"
    },
    {
        question: "¿Cuál es mi bebida favorita?",
        answers: ["zumo de naranja", "leche", "agua", "zumo de melocoton"],
        correct: "agua"
    },
    {
        question: "¿Qué prefiero hacer en mi tiempo libre?",
        answers: ["hablar contigo", "ver películas", "jugar a videojuegos", "hacer ejercicio"],
        correct: "ver películas"
    },
    {
        question: "¿Cuál es mi sabor de helado favorito?",
        answers: ["chocolate", "vainilla", "kinder", "ferrero"],
        correct: "kinder"
    },
    {
        question: "¿Qué prefiero para el desayuno?",
        answers: ["tortitas", "huevos", "tostadas", "fruta"],
        correct: "tortitas"
    },
    {
        question: "¿Qué mascota me gustaría tener?",
        answers: ["perro", "gato", "pez", "turtuga"],
        correct: "perro"
    },
    {
        question: "¿Cuál es mi actividad favorita al aire libre?",
        answers: ["ir a la playa", "hacer deporte", "dar un paseo", "ver las estrellas"],
        correct: "hacer deporte"
    },
    {
        question: "¿Qué prefiero para relajarme?",
        answers: ["que me den un masaje", "tomar un baño", "ver una serie", "gritar"],
        correct: "tomar un baño"
    },
    {
        question: "¿Cuál es mi género de música favorito?",
        answers: ["pop", "rock", "requeton", "ninguno"],
        correct: "ninguno"
    },
    {
        question: "¿Qué prefiero comer de postre?",
        answers: ["tarta", "galletas", "helado", "fruta"],
        correct: "tarta"
    },
    {
        question: "¿Cuál es mi flor favorita?",
        answers: ["rosa", "lirio", "girasol", "gerbera"],
        correct: "girasol"
    },
    {
        question: "¿Cuál es mi deporte favorito?",
        answers: ["fútbol", "ping pong", "padel", "baloncesto"],
        correct: "baloncesto"
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
