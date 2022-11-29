const containerbackground = document.querySelector(`#containerbackground`)
const progressbar = document.querySelector(`#progressbarcolor`)
/* Page Starts Out White Originally With No Dotted Grid
This Line Of Code Adds A Default Black Background With A Gray Dotted Grid Image Ontop Of it. Incase that you don't want any of the other color options. */
containerbackground.classList.add('backgroundgray')
progressbar.classList.add('progressgray')


/* FUNCTIONS */

/* Function To Get Rid Of Previous Color Picker Options (Classlist.Remove Usage) */
function containerbackgroundclear () {
    containerbackground.classList.remove('backgroundgray')
    containerbackground.classList.remove('backgroundred')
    containerbackground.classList.remove('backgroundorange')
    containerbackground.classList.remove('backgroundyellow')
    containerbackground.classList.remove('backgroundgreen')
    containerbackground.classList.remove('backgroundcyan')
    containerbackground.classList.remove('backgroundblue')
    containerbackground.classList.remove('backgroundpurple')
}
/* Function To Get Rid Of Previous Color Picker Options (Classlist.Remove Usage) */
function progressbarcontainerclear () { 
    progressbar.classList.remove('progressgray')
    progressbar.classList.remove('progressred')
    progressbar.classList.remove('progressorange')
    progressbar.classList.remove('progressyellow')
    progressbar.classList.remove('progressgreen')
    progressbar.classList.remove('progresscyan')
    progressbar.classList.remove('progressblue')
    progressbar.classList.remove('progresspurple')
}

/* A Bunch Of Mouse Click Checking Functions That Add Check When You Click Then
Use A Bunch Of Previously Made Function(s) And Put Them To Use By Using The Function(s) To Clear The Background Or Any Element That Has A Customizable Option And Then Adds The New Color via A ClassList With A Bunch Of Color Classes. */

document.querySelector('#graycircle').addEventListener('click', () => {
    containerbackgroundclear()
    progressbarcontainerclear()
    containerbackground.classList.add('backgroundgray')
    progressbar.classList.add('progressgray')

})

document.querySelector('#redcircle').addEventListener('click', () => {
    containerbackgroundclear()
    progressbarcontainerclear()
    containerbackground.classList.add('backgroundred')
    progressbar.classList.add('progressred')
})

document.querySelector('#orangecircle').addEventListener('click', () => {
    containerbackgroundclear()
    progressbarcontainerclear()
    containerbackground.classList.add('backgroundorange')
    progressbar.classList.add('progressorange')
})

document.querySelector('#yellowcircle').addEventListener('click', () => {
    containerbackgroundclear()
    progressbarcontainerclear()
    containerbackground.classList.add('backgroundyellow')
    progressbar.classList.add('progressyellow')
})

document.querySelector('#greencircle').addEventListener('click', () => {
    containerbackgroundclear()
    containerbackground.classList.add('backgroundgreen')
    progressbar.classList.add('progressgreen')
})

document.querySelector('#cyancircle').addEventListener('click', () => {
    containerbackgroundclear()
    progressbarcontainerclear()
    containerbackground.classList.add('backgroundcyan')
    progressbar.classList.add('progresscyan')
})

document.querySelector('#bluecircle').addEventListener('click', () => {
    containerbackgroundclear()
    progressbarcontainerclear()
    containerbackground.classList.add('backgroundblue')
    progressbar.classList.add('progressblue')
})

document.querySelector('#purplecircle').addEventListener('click', () => {
    containerbackgroundclear()
    progressbarcontainerclear()
    containerbackground.classList.add('backgroundpurple')
    progressbar.classList.add('progresspurple')
})