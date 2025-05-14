function status() {
    let alunos = 30
    let cursos = 1
    let turmas = 1
    let participantes = turmas * alunos
    window.document.querySelector('p#alunos').innerText = participantes
    window.document.querySelector('p#turmas').innerText = turmas
    window.document.querySelector('p#cursos').innerText = cursos
}