'strict mode';
//selected all the buttons
// const button = document.getElementsByTagName('button');

const buttons = [...document.getElementsByTagName('button')];

buttons.forEach(item => {
    item.addEventListener('click', function () {
        item.classList.add('color')
    })
})


