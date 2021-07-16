//esse evento executara assim que o HTML E JS for redenrizado
//não leva em consideração as midias
document.addEventListener('DOMContentLoaded', function (e) {
    console.log('HTML parsed and DOM tree built', e)
})

//executara quando o pagina estiver totalmente carregada
window.addEventListener('load', function (e) {
    console.log('page fully loaded', e)
})

//when the user leaves the page
// window.addEventListener('beforeunload', function (e) {
//     e.preventDefault();
//     e.returnValue = 'message'
// })