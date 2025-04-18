const keyDataDestino = 'dataDestinoContador';
let dataDestino;

const dataSalva = localStorage.getItem(keyDataDestino);

if (dataSalva) {
    dataDestino = new Date(dataSalva);
} else {
    const agora = new Date();
    const anoAtual = agora.getFullYear();
    let alvo = new Date(anoAtual, 4, 16, 0, 0, 0); // 4 = maio (mês é 0-indexado)

    if (agora > alvo) {
        alvo.setFullYear(anoAtual + 1);
    }

    dataDestino = alvo;
    localStorage.setItem(keyDataDestino, dataDestino.toISOString());
}

function atualizarContagem() {
    const agora = new Date();
    const distancia = dataDestino - agora;

    if (distancia <= 0) {
        clearInterval(intervalo);
        document.getElementById('tempo').textContent = "Tempo Esgotado!";
        return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = String(dias).padStart(2, '0');
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
}

const intervalo = setInterval(atualizarContagem, 1000);
atualizarContagem();