/*o evento se propagara em cada elemento pai que possuir um ouvidor,
ao clicar no container, apenas ele será executado pois o mesmo não possui
nenhum elemento pai com ouvidor, ao clicar no "a" o box-wrapper e  container será disparado
pois eles estão no caminho, pois o evento irá até o "a" e depois volta até o :root do html*/

document.querySelector('.container').addEventListener('click', function (e) {
    console.log('inside container')
    console.log(e.currentTarget === this)
});

document.querySelector('.box_wrapper').addEventListener('click', function (e) {
    console.log('inside box-wrapper')

});

document.querySelector('a').addEventListener('click', function (e) {
    this.style.backgroundColor = 'red'
    console.log('a');

    e.stopPropagation(); // is not a good idea to use it 
});