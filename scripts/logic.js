var form = window.document.getElementById('inscricao');

const dados = {
    nome: window.document.querySelector('input#iname_main'),
    email: window.document.querySelector('input#iemail'),
    classe: window.document.querySelector('select#iclasse'),
    turma: window.document.querySelector('select#iturma'),
    curso: window.document.querySelector('select#icurso'),
    tipo: window.document.querySelector('select#itipo'),
    descricao: window.document.querySelector('textarea#idesc')
};



// Coloque o URL do seu Web App do Google Apps Script aqui
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwXOrZC7a3x8e2MeuBaDx-Z0DwHJEp09b8TEaey1yOs6igxVVaz5miD1TE7RbvMhIkTZg/exec'; // !!! SUBSTITUA ISSO !!!

const form = window.document.getElementById('inscricao');
/* NAO USADO
const statusMessage = document.getElementById('status-message');
const loadingIndicator = document.getElementById('loading-indicator');
*/

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Mostra o indicador de carregamento e oculta mensagens anteriores
    /*
    loadingIndicator.style.display = 'block';
    statusMessage.style.display = 'none';
    statusMessage.textContent = '';
    statusMessage.className = ''; // Limpa classes CSS (success/error)
    */

    // Desabilita o botão de envio para evitar múltiplos cliques
    const submitButton = form.querySelector('ienviar');
    submitButton.disabled = true;

    // Cria um objeto FormData a partir do formulário
    // Isso automaticamente pega todos os campos com 'name'
    const formData = new FormData(form);

    // Usa a API Fetch para enviar os dados para o Google Apps Script
    fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // O Apps Script foi configurado para retornar JSON
        // Verifica se a resposta da rede foi ok (status 200-299)
        if (!response.ok) {
             // Se a resposta da rede não foi ok, lança um erro para ser pego pelo .catch
             // Tenta ler o corpo da resposta como texto para dar mais detalhes, se possível
             return response.text().then(text => {
                throw new Error('Erro na rede: Status ' + response.status + '. Resposta: ' + text);
             });
        }
        return response.json(); // Converte a resposta para JSON
    })
    .then(data => {
        console.log('Resposta do Apps Script:', data);
        // Verifica a resposta do *script* (que definimos como {result: 'success'} ou {result: 'error'})
        if (data.result === 'success') {
            statusMessage.textContent = 'Dados enviados com sucesso!';
            statusMessage.className = 'success'; // Adiciona classe CSS para sucesso
            form.reset(); // Limpa o formulário
        } else {
            // Se o script retornou um erro conhecido
            statusMessage.textContent = 'Erro ao enviar dados: ' + (data.error || 'Erro desconhecido no script.');
            statusMessage.className = 'error'; // Adiciona classe CSS para erro
            console.error('Erro retornado pelo Apps Script:', data.error);
        }
    })
    .catch(error => {
        // Pega erros de rede (fetch falhou) ou erros lançados no .then anterior
        console.error('Erro no fetch:', error);
        statusMessage.textContent = 'Erro ao enviar dados. Verifique sua conexão ou contate o suporte. Detalhes: ' + error.message;
        statusMessage.className = 'error';
    })
    .finally(() => {
        // Este bloco sempre executa, seja sucesso ou erro
        loadingIndicator.style.display = 'none'; // Oculta o indicador de carregamento
        statusMessage.style.display = 'block';  // Mostra a mensagem de status
        submitButton.disabled = false; // Reabilita o botão de envio
    });
});