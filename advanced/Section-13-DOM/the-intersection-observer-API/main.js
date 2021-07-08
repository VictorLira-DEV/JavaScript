const section2Container = document.querySelector(".section2");
// const section2 = section2Container.getBoundingClientRect();

const sectionCheck = function (entries, section2Observer) {
    /*essa função será chamada quando apenas 20% do alvo for visivel em relação ao root, nese caso o viewport */
    entries.forEach(entry => console.log(entry))
};

const section2Observer = new IntersectionObserver(sectionCheck, {
    /*essa API é boa pq só chama a função com base na porcentagem do thrashold*/
    root: null, //null irá interseptar a tela toda, poderiamos selectionar um alvo específico
    threshold: 0.2, //indica a porcentagem em relação ao root , podemos ter um array de thrashold
});

section2Observer.observe(section2Container);

//intersectionRatio é igual o threshold
//isIntersection retornará se o valor está dentro do threshold