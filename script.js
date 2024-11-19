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
let index = 0;

// Função para simular o efeito de digitação
function typeEffect() {
    if (index < randomMessage.length) {
        document.getElementById('message').innerText += randomMessage.charAt(index);
        index++;
        setTimeout(typeEffect, 50); // Ajuste a velocidade da digitação alterando o tempo (em milissegundos)
    }
}

// Inicia o efeito de digitação
typeEffect();
