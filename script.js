const messages = [
    "Caminhos se cruzam no vazio...",
    "Buscando o que um dia existiu...",
    "O silêncio responde tudo...",
    "A jornada termina aqui...",
    "O destino permanece oculto...",
    "Uma busca sem resposta...",
    "Onde o vazio ecoa..."
];

// Seleciona uma mensagem aleatória
const randomMessage = messages[Math.floor(Math.random() * messages.length)];
document.getElementById('message').innerText = randomMessage;
