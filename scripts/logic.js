var corpo = {
    head: window.document.querySelector('header#ins'),
    main: window.document.querySelector('main.increva_main'),
    foot: window.document.querySelector('footer'),
    impremir: window.document.querySelector('main#print')
};

var valor = {
    name: window.document.querySelector('input#iname_main'),
    email: window.document.querySelector('input#iemail'),
    tel: window.document.querySelector('input#itel'),
    classe: window.document.querySelector('select#iclasse'),
    turma: window.document.querySelector('select#iturma'),
    curso: window.document.querySelector('select#icurso'),
    tipo: window.document.querySelector('select#itipo'),
    orcamento: window.document.querySelector('input#iorca'),
    descricao: window.document.querySelector('textarea#idesc'),
    ano: new Date().getFullYear(),
    mes: new Date().getMonth() + 1,
    dia: new Date().getDate(),
    hora: new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds()
};

var impresso = {
    nome: window.document.querySelector('span#nome'),
    email: window.document.querySelector('span#email'),
    tel: window.document.querySelector('span#telefone'),
    classe: window.document.querySelector('span#classe'),
    turma: window.document.querySelector('span#turma'),
    curso: window.document.querySelector('span#curso'),
    tipo: window.document.querySelector('span#tipo'),
    ano: window.document.querySelector('span#ano'),
    mes: window.document.querySelector('span#mes'),
    dia: window.document.querySelector('span#dia'),
    hora: window.document.querySelector('span#hora'),
    orcamento: window.document.querySelector('span#valor'),
    descricao: window.document.querySelector('p#descricao')
};

function money() {
    var pay = valor.orcamento.value
    var maximo = 1500000
    if (pay > maximo) {
        valor.orcamento.value = 0
        window.alert(`O orçamento não deve ser maior que ${maximo} KZ (UM MILHÃO E QUINHENTOS KWANZAS)`)
    }
}

function len() {
    var area = valor.descricao.value
    window.document.querySelector('span#length').innerHTML = area.length
}

function print() {

    if (valor.name.value == '' || valor.email.value == '' || valor.descricao.value =='' || valor.orcamento.value =='') {
        window.alert('Preencha os campos Fazio!');
        return false;
    } 
    
    window.alert('Aguarde, gerando o seu comprovante de inscrição...');

    corpo.main.style.display = 'none';
    corpo.head.style.display = 'none';
    corpo.foot.style.display = 'none';
    corpo.impremir.style.display = 'block';

    impresso.nome.innerHTML = valor.name.value;
    impresso.email.innerHTML = valor.email.value;
    impresso.tel.innerHTML = valor.tel.value;
    impresso.classe.innerHTML = valor.classe.value;
    impresso.turma.innerHTML = valor.turma.value;
    impresso.curso.innerHTML =  valor.curso.value;
    impresso.tipo.innerHTML = valor.tipo.value;
    impresso.ano.innerHTML = valor.ano;
    impresso.mes.innerHTML = valor.mes;
    impresso.dia.innerHTML = valor.dia;
    impresso.hora.innerHTML = valor.hora;
    impresso.orcamento.innerHTML = valor.orcamento.value
    impresso.descricao.innerHTML = valor.descricao.value;
}