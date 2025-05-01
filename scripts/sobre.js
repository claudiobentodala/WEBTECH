var elemento = {
    nome: window.document.querySelector('span#nome'),
    fundacao: window.document.querySelector('span#fundacao'),
    ano: window.document.querySelector('span#ano'),
    hora: window.document.querySelector('span#hora'),
    minuto: window.document.querySelector('span#minuto'),
    local: window.document.querySelector('span#local')
}
var data = {
    ano: new Date().getFullYear(),
    dia: new Date().getDay(),
    mes: new Date().getMonth()
}
var passo = {
    comeco: 10,
    terminio: 17,
    local: 'angola - luanda - camama - camama1'
}
elemento.nome.innerHTML = 'instituto politecnico carmun'
elemento.fundacao.innerHTML = 2015
if (data.mes >= 5) {
    if (data.dia >= 17) {
        elemento.ano.innerHTML = data.ano + 1
    } else{
        elemento.ano.innerHTML = data.ano
    }
} else {
    elemento.ano.innerHTML = data.ano
}
elemento.hora.innerHTML = passo.comeco
elemento.minuto.innerHTML = passo.terminio
elemento.local.innerHTML = passo.local