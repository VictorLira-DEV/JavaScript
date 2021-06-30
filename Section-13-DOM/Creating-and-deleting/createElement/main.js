const container = document.querySelector('.container');

const buttonWrapper = document.createElement('div');
buttonWrapper.setAttribute('class', 'button_wrapper');
container.append(buttonWrapper);

const buttonWrapperH2 = document.createElement('h2');
buttonWrapperH2.innerText = 'Button wrapper';
buttonWrapper.append(buttonWrapperH2);

const divWrapper = document.createElement('div');
divWrapper.setAttribute('class', 'div_wrapper');
container.append(divWrapper);

const box1 = document.createElement('div');
const box2 = document.createElement('div');
const box3 = document.createElement('div');
const box4 = document.createElement('div');
const allBoxes = [box1, box2, box3, box4];


allBoxes.forEach((item, index) => {
    item.classList.add('box');
    divWrapper.append(item);
    item.innerText = index
    item.addEventListener('click', function () {
        item.remove();
    })
})

//prepend method insert the element as the first child
prepend();
//append method insert the elenet as the last child
append();
//
before();
after();

