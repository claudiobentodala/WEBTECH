function load(){
    return true
}
function loaded(){
    return true
}
let head = window.document.querySelector('header')
let main = window.document.querySelector('main')
let foot = window.document.querySelector('footer')
let bod = window.document.querySelector('div#body')
if(load()) {
    head.style.display = 'none'
    main.style.display = 'none'
    foot.style.display = 'none'
    bod.style.display = 'flex'
}
if(loaded()){
    bod.style.display = 'none'
    head.style.display = 'flex'
    main.style.display = 'block'
    foot.style.display = 'block'
}