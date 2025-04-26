var corpo = {
    bod: window.document.querySelector('div#body'),
    head: window.document.querySelector('header'),
    main: window.document.querySelector('main'),
    foot: window.document.querySelector('footer')
}
function carregar(completo,tempo) {
    if (completo) {
        corpo.head.style.display = 'none'
    }
    corpo.main.style.display = 'none'
    corpo.foot.style.display = 'none'
    corpo.bod.style.display = 'flex'
    setTimeout(function(){
        if (completo) {
            corpo.head.style.display = 'flex'
        }
        corpo.main.style.display = 'block'
        corpo.foot.style.display = 'block'
        corpo.bod.style.display = 'none'
    }, tempo)
}