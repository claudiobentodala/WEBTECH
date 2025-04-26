var form = window.document.getElementById('inscricao');
const database = firebase.database();

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Coleta os valores dos campos do formulário
    var nome = window.document.querySelector('input#iname_main').value
    var email = window.document.querySelector('input#iemail').value
    var classe = window.document.querySelector('select#iclasse').value
    var turma = window.document.querySelector('select#iturma').value
    var curso = window.document.querySelector('select#icurso').value
    var tipo = window.document.querySelector('select#itipo').value
    var descricao = window.document.querySelector('textarea#idesc').value

    // Cria um objeto com os dados a serem enviados
    const dados = {
      nome: nome,
      email: email,
      classe: classe,
      turma: turma,
      curso: curso,
      tipo: tipo,
      descricao: descricao,
      timestamp: firebase.database.ServerValue.TIMESTAMP // Adiciona um timestamp do servidor
    };

    // Envia os dados para o Firebase Realtime Database
    // 'mensagens' é o nó (collection-like) onde você armazenará os dados
    firebase.database().ref('mensagens').push(dados)
      .then(() => {
        mensagemStatus.textContent = 'Mensagem enviada com sucesso!';
        formulario.reset(); // Limpa o formulário após o envio
      })
      .catch((error) => {
        console.error("Erro ao enviar mensagem:", error);
        mensagemStatus.textContent = 'Ocorreu um erro ao enviar a mensagem.';
      });
  });