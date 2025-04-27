var corpo = {
    bod: window.document.querySelector('div#body'),
    head: window.document.querySelector('header'),
    main: window.document.querySelector('main'),
    foot: window.document.querySelector('footer')
}


const dados = {
    nome: window.document.querySelector('input#iname_main').value,
    email: window.document.querySelector('input#iemail').value,
    classe: window.document.querySelector('select#iclasse').value,
    turma: window.document.querySelector('select#iturma').value,
    curso: window.document.querySelector('select#icurso').value,
    tipo: window.document.querySelector('select#itipo').value,
    descricao: window.document.querySelector('textarea#idesc').value
};