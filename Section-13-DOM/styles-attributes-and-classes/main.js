//styles
const container = document.querySelector('.container');
const message = document.querySelector('.message');
const h2 = document.createElement('h2');
h2.innerText = 'Estado do Espirito Santo, Seja bem vindo';
message.append(h2)

message.style.backgroundColor = '#37383d';
message.style.color = 'white';
message.style.width = '100%';

//we use this to change variables colors in CSS
document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attibutes
const picture = document.querySelector('#picture');
console.log(picture.src)
console.log(picture.alt)
console.log(picture.id)
console.log(picture.getAttribute('src'));

//data attribute
console.log(picture.dataset.versionNumber)


//classes
picture.classList.add('c', 'a', 's'); //we can add multiple classes
picture.classList.remove('c', 's');
picture.classList.toggle('c');
picture.classList.contains('c');

//don't use this one, it will overwrite all classes
picture.className = 'jonas'



