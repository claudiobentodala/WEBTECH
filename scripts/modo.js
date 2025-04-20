let fundo = window.document.querySelector('body')

let link_home = {
    text: window.document.querySelector('a#texta'),
    get: window.document.querySelector('a#geta'),
    patro: window.document.querySelector('a#patroa'),
    ora: window.document.querySelector('a#ora'),
}

let icone = {
    dark: window.document.querySelector('img#dark'),
    ligth: window.document.querySelector('img#ligth')
}

function modo() {
    if (ligth.style.display == 'none') {
        
        icone.dark.style.display = 'none'
        icone.ligth.style.display = 'block'
        fundo.style.background = '#020235'
        
        link_home.text.style.background = '#020235'
        link_home.text.style.color = 'skyblue'

        link_home.get.style.background = '#020235'
        link_home.get.style.color = 'skyblue'

        link_home.patro.style.background = '#020235'
        link_home.patro.style.color = 'skyblue'

        link_home.ora.style.background = '#020235'
        link_home.ora.style.color = 'skyblue'
        
    } else {

        ligth.style.display = 'none'
        dark.style.display = 'block'
        
        fundo.style.background = '#b1d9ff'
        
        link_home.text.style.background = 'skyblue'
        link_home.text.style.color = '#020235'

        link_home.get.style.background = 'skyblue'
        link_home.get.style.color = '#020235'

        link_home.patro.style.background = 'skyblue'
        link_home.patro.style.color = '#020235'

        link_home.ora.style.background = 'skyblue'
        link_home.ora.style.color = '#020235'
    }
}