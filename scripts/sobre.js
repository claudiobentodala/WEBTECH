var elemento = {
    nome: window.document.querySelector('span#nome'),
    fundacao: window.document.querySelector('span#fundacao'),
    ano: window.document.querySelector('span#ano'),
    hora: window.document.querySelector('span#hora'),
    minuto: window.document.querySelector('span#minuto'),
    local: window.document.querySelector('span#local'),
    historia: window.document.querySelector('p#historia'),
    localizacao: window.document.querySelector('p#localizacao')
}
var data = {
    ano: new Date().getFullYear(),
    dia: new Date().getDay(),
    mes: new Date().getMonth()
}
var passo = {
    comeco: 10,
    terminio: 17,
    local: 'angola - luanda - camama - camama1 - colegio madrugada',
    descricao_historia:'O Instituto Politécnico Privado Carmun teve origem como o Colégio Madrugada, uma escola privada voltada ao ensino geral. Com o tempo, alinhando-se às necessidades crescentes do país por formação técnica e profissional, a instituição foi reestruturada e passou a operar como um instituto politécnico, com foco na educação técnica de nível médio.',
    descricao_localizacao: 'Muito perto da instituição, a menos de 100 metros, encontra-se o espaço de eventos SOLAR DO CAMAMA. A uma curta distância a pé, a cerca de 250-300 metros, existem várias lojas e serviços, incluindo o supermercado Deskontão Camama, o Supermercado Rio Jordão e o Multicenter. Um pouco mais adiante, a cerca de 500-600 metros, localizam-se o supermercado Fresmart Express Camama II e o restaurante Paragem Quente. O Hotel Camama fica também nas imediações, a aproximadamente 900 metros de distância. Estes estabelecimentos na Estrada Direita do Camama podem ajudar na sua orientação para encontrar o instituto.'
}
elemento.historia.innerHTML = passo.descricao_historia
elemento.localizacao.innerHTML = passo.descricao_localizacao
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