const h1 = document.querySelector('h1');

const alertH1 =  function () {
    alert('great job, you are reading the header')
}

h1.addEventListener('mouseenter', alertH1)


setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)

// h1.onmouseenter = function () {
//     alert('great job, you are reading the header')
// }