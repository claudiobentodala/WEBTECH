const dataDestino = new Date();
dataDestino.setDate(dataDestino.getDate() + 15); 

function atualizarContagem() {
    const agora = new Date();
    
    const distancia = dataDestino - agora;
    
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
    
    document.getElementById('dias').textContent = String(dias).padStart(2, '0');
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
    
    if (distancia < 0) {
        clearInterval(intervalo);
        document.getElementById('tempo').textContent = "Tempo Esgotado!";
    }
}

const intervalo = setInterval(atualizarContagem, 1000);

atualizarContagem();
