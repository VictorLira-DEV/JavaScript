'user strict';

// document.querySelector();
// document.querySelectorAll();//nodeList
// document.getElementById();
// document.getElementsByClassName();//htmlCollection
// document.getElementsByTagName();//htmlcollection

//selection all buttons

const allBtns = document.querySelectorAll('.btn');
allBtns.forEach(item => {
    item.addEventListener('click', function() {
        item.classList.add('color');
    })
});