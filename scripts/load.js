var corpo = {
    bod: window.document.querySelector('div#body'),
    head: window.document.querySelector('header'),
    main: window.document.querySelector('main'),
    foot: window.document.querySelector('footer')
}

function carregar(completo,tempo) {
    if (!completo) {
        corpo.head.style.display = 'flex'
    }
    setTimeout(function(){
        corpo.bod.style.display = 'none'
        corpo.head.style.display = 'flex'
        corpo.main.style.display = 'block'
        corpo.foot.style.display = 'block'
    }, tempo) 
}