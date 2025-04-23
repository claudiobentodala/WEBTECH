/*
CRIAR VARIAVEIS CONSTANTE QUE GUARDA AS CORES, PX...
*/
let fundo = window.document.querySelector('body')
let modo_icone = window.document.querySelector('div#modo')

let icone = {
    dark: window.document.querySelector('img#dark'),
    ligth: window.document.querySelector('img#ligth')
}

let section_home = {
    introducao: window.document.querySelector('section#intro'),
    time: window.document.querySelector('section#time'),
    estado: window.document.querySelector('section#status'),
    get: window.document.querySelector('section#get'),
    orador: window.document.querySelector('section#ora'),
    patrocinadores: window.document.querySelector('section#patro')
}

let link_home = {
    text: window.document.querySelector('a#texta'),
    get: window.document.querySelector('a#geta'),
    patro: window.document.querySelector('a#patroa'),
    ora: window.document.querySelector('a#ora'),
}

function modo() {
    if (ligth.style.display == 'none') {
        
        icone.dark.style.display = 'none'
        icone.ligth.style.display = 'block'
        fundo.style.background = '#020235'
        
        section_home.introducao.style.boxShadow = '0px 0px 30px 22px darkblue'
        link_home.text.style.background = '#020235'
        link_home.text.style.color = 'skyblue'
        
        section_home.time.style.boxShadow = '0px 0px 30px 22px darkblue'
        
        section_home.estado.style.boxShadow = '0px 0px 30px 22px darkblue'
        
        section_home.get.style.boxShadow = '0px 0px 30px 22px darkblue'
        link_home.get.style.background = '#020235'
        link_home.get.style.color = 'skyblue'
        
        section_home.orador.style.boxShadow = '0px 0px 30px 22px darkblue'
        link_home.ora.style.background = '#020235'
        link_home.ora.style.color = 'skyblue'
        
        section_home.patrocinadores.style.boxShadow = '0px 0px 30px 22px darkblue'
        link_home.patro.style.background = '#020235'
        link_home.patro.style.color = 'skyblue'

    } else {
        
        ligth.style.display = 'none'
        dark.style.display = 'block'
        
        fundo.style.background = '#b1d9ff'
        
        section_home.introducao.style.boxShadow = '0px 0px 0px skyblue'
        link_home.text.style.background = 'skyblue'
        link_home.text.style.color = '#020235'
        
        section_home.time.style.boxShadow = '0px 0px 0px skyblue'
        
        section_home.estado.style.boxShadow = '0px 0px 0px skyblue'
        
        section_home.get.style.boxShadow = '0px 0px 0px skyblue'
        link_home.get.style.background = 'skyblue'
        link_home.get.style.color = '#020235'
        
        section_home.orador.style.boxShadow = '0px 0px 0px skyblue'
        link_home.ora.style.background = 'skyblue'
        link_home.ora.style.color = '#020235'
        
        section_home.patrocinadores.style.boxShadow = '0px 0px 0px skyblue'
        link_home.patro.style.background = 'skyblue'
        link_home.patro.style.color = '#020235'
    }
}