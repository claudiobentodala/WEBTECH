var bod = window.document.querySelector('div#body')
var head = window.document.querySelector('header')
var main = window.document.querySelector('main')
var foot = window.document.querySelector('footer')
function carregar() {
    head.style.display = 'none'
    main.style.display = 'none'
    foot.style.display = 'none'
    bod.style.display = 'flex'
    setTimeout(function(){
        bod.style.display = 'none'
        head.style.display = 'flex'
        main.style.display = 'block'
        foot.style.display = 'block'
    }, 3000)
}