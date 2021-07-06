/*quando trabalhamos com varios elementos que precisam ser selecionados ao invés de selecionar todos e percorrer
usando o forEach, apenas usamos o "e.target" para saber de onde o evento surgiu, isso melhora a performance do app*/

document.querySelector('.box_wrapper').addEventListener('click', function (e) {
    if (e.target.classList.contains('box')) {
        e.target.style.backgroundColor = 'green'
    }
})