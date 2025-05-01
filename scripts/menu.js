var estado = {
    menu : window.document.querySelector('img#menu'),
    fechar : window.document.querySelector('img#fechar')
}
function clickMenu() {
     if (itens.style.display == 'none') {
        itens.style.display = 'flex'
        estado.menu.style.display = 'none'
        estado.fechar.style.display = 'block'
    } 
    else{
        itens.style.display = 'none'
        estado.menu.style.display = 'block'
        estado.fechar.style.display = 'none'
    }
}