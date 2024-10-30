// Generar corazones aleatoriamente en la pantalla
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    // Posición aleatoria en el eje X
    heart.style.left = `${Math.random() * 100}vw`;

    // Tamaño aleatorio
    const size = Math.random() * 10 + 10;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Duración aleatoria
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;

    // Añadir el corazón al body
    document.body.appendChild(heart);

    // Eliminar el corazón después de que termine la animación
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Crear corazones cada 300 ms
setInterval(createHeart, 300);
