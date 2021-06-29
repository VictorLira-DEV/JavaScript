//selecting
document.querySelector();
document.querySelectorAll();//nodeList
document.getElementById();
document.getElementsByClassName();//htmlCollection
document.getElementsByTagName();//htmlcollection


//creating and inserting elements
//insertAdjacentHtml

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookie for improved functionality';
message.innerHTML = 'We use cookie for improved functionality<button class="btn">Got it </button>';

//we cannot prepend and append the same element at the same time

//prepend method insert the element as the first child
header.prepend(message);

//append methos insert the elenet as the last child
header.append(message);
header.before(message);
header.after(message);


//deleating elements
document.querySelector('.btn-close-cookie').addEventListener('click', function () {
    message.remove;
    message.parentElement.removeChild(message);
})

