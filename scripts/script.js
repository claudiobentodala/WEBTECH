let menu = window.document.querySelector('img#menu')
let fechar = window.document.querySelector('img#fechar')
function clickMenu() {
     if (itens.style.display == 'none') {
        itens.style.display = 'flex'
        menu.style.display = 'none'
        fechar.style.display = 'block'
    } 
    else{
        itens.style.display = 'none'
        menu.style.display = 'block'
        fechar.style.display = 'none'
    }
}