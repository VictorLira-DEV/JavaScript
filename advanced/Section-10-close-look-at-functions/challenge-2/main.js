'use strict';

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';

    const body = document.querySelector('body');
    body.addEventListener('click', function () {
        header.style.color = 'blue'
    });
})();



