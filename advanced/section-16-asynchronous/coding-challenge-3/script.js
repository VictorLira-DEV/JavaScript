'use strict';
const imagesContainer = document.querySelector('.images');

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const createImage = imgPath => {
    /* essa função retorna uma promessa para não travar o block de execução do site */
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.setAttribute('src', imgPath);

        img.addEventListener('load', function () {
            imagesContainer.appendChild(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};

// const loadNPause = async () => {
//     try {
//         let img = await createImage('./img/img-1.jpg');
//         await wait(2);
//         img.style.display = 'none';

//         img = await createImage('./img/img-2.jpg');
//         await wait(2);
//         img.style.display = 'none';

//         img = await createImage('./img/img-3.jpg');
//         await wait(2);
//         img.style.display = 'none';
//     } catch (error) {
//         console.error(error);
//     }
// };

// loadNPause();

const loadAll = async imgArr => {
    try {
        const imgs = imgArr.map(async img => await createImage(img));
        console.log(imgs)
        const images = await Promise.all(imgs);

        images.forEach(img => {
            img.classList.add('parallel');
        });

        console.log('who was faster');
    } catch (err) {
        console.error(err);
    }
};

loadAll(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg']);
console.log('who was faster');
