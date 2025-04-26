var bod = window.document.querySelector('div#body')
var head = window.document.querySelector('header')
var main = window.document.querySelector('main')
var foot = window.document.querySelector('footer')
function carregar(completo,tempo) {
    if (completo) {
        head.style.display = 'none'
    }
    main.style.display = 'none'
    foot.style.display = 'none'
    bod.style.display = 'flex'
    setTimeout(function(){
        if (completo) {
            head.style.display = 'flex'
        }
        main.style.display = 'block'
        foot.style.display = 'block'
        bod.style.display = 'none'
    }, tempo)
}