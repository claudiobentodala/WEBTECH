var corpo = {
    head: window.document.querySelector('header#ins'),
    main: window.document.querySelector('main.increva_main'),
    foot: window.document.querySelector('footer'),
    impremir: window.document.querySelector('main#print')
};

function money() {
    var pay = window.document.querySelector('input#iorca').value
    var maximo = 1500000
    if (pay > maximo) {
        window.document.querySelector('input#iorca').value = 
        window.alert(`O orçamento não deve ser maior que ${maximo} KZ (UM MILHÃO E QUINHENTOS KWANZAS)`)
    }
}

function len() {
    var area = window.document.querySelector('textarea#idesc').value
    window.document.querySelector('span#length').innerHTML = area.length
}

function print() {

    if (window.document.querySelector('input#iname_main').value == '' || window.document.querySelector('input#iemail').value == '' || window.document.querySelector('textarea#idesc').value =='' || window.document.querySelector('input#iorca').value =='') {
        window.alert('Preencha os campos Fazio!');
        window.document.querySelector('input#iname_main').focus();
        window.document.querySelector('input#iemail').focus();
        
        return false;
    } 
    
    window.alert('Aguarde, gerando o seu comprovante de inscrição...');

    corpo.main.style.display = 'none';
    corpo.head.style.display = 'none';
    corpo.foot.style.display = 'none';
    corpo.impremir.style.display = 'block';

    window.document.querySelector('span#nome').innerHTML = window.document.querySelector('input#iname_main').value;
    window.document.querySelector('span#email').innerHTML = window.document.querySelector('input#iemail').value;
    window.document.querySelector('span#classe').innerHTML = window.document.querySelector('select#iclasse').value;
    window.document.querySelector('span#turma').innerHTML = window.document.querySelector('select#iturma').value;
    window.document.querySelector('span#curso').innerHTML =  window.document.querySelector('select#icurso').value;
    window.document.querySelector('span#tipo').innerHTML = window.document.querySelector('select#itipo').value;
    window.document.querySelector('span#ano').innerHTML = new Date().getFullYear();
    window.document.querySelector('span#mes').innerHTML = new Date().getMonth() + 1;
    window.document.querySelector('span#dia').innerHTML = new Date().getDate();
    window.document.querySelector('span#hora').innerHTML = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
    window.document.querySelector('span#valor').innerHTML = window.document.querySelector('input#iorca').value
    window.document.querySelector('p#descricao').innerHTML = window.document.querySelector('textarea#idesc').value;
}