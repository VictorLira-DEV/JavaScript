//going downwards
const container = document.querySelector('.container');

console.log(container.childNodes); //childNodes retorna tudo ate mesmo os comentarios;
console.log(container.children);
container.firstElementChild.style.color = 'orangered';
container.lastElementChild.style.color = 'yellowgreen';

//going upwards
const lastParagraph = document.querySelector('#last_one');
console.log(lastParagraph.parentNode);
console.log(lastParagraph.parentElement);

//closest eu tenho acesso ao elemento mais proximo ao do lastParagraph
lastParagraph.closest('.wrapper').style.backgroundColor = 'yellow'

//going sideWays  
console.log(lastParagraph.previousElementSibling);
console.log(lastParagraph.nextElementSibling);

//selecting all sibilings
console.log(lastParagraph.parentElement.children)

