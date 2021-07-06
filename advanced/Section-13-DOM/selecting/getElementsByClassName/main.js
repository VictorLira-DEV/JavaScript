//convertendo de html collection para array to user array methods
const buttons = [...document.getElementsByClassName('btn')];
const buttonsArray = document.getElementsByClassName('btn');
//we can specify de index as we can se below
// const buttonsArray = document.getElementsByClassName('btn')[1];

buttons.forEach(item => {
    item.addEventListener('click', function () {
        item.classList.add('color')
    })
})

console.log(buttonsArray)