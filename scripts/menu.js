var elemento = {
    principal: window.document.querySelector('main'),
    rodape: window.document.querySelector('footer')
}
var estado = {
    menu : window.document.querySelector('img#menu'),
    fechar : window.document.querySelector('img#fechar')
}
function mostrar() {
    itens.style.display = 'flex'
    estado.menu.style.display = 'none'
    estado.fechar.style.display = 'block'
}
function ocultar() {
    itens.style.display = 'none'
    estado.fechar.style.display = 'none'
    estado.menu.style.display = 'block'
}
function clickMenu() {
    if (itens.style.display == 'none') {
        mostrar()
    } else{
        ocultar()
    }
}
function foraMenu() {
    if(itens.style.display == 'flex') {
        ocultar()
    } 
}