'use strict';
const imagesContainer = document.querySelector('.images');

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const createImage = imgPath => {
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

let currentImg;
// const loadNPause = async () => {
//     try {
//         currentImg = await createImage('./img/img-1.jpg');
//         await wait(2);
//         currentImg.style.display = 'none';

//         currentImg = await createImage('./img/img-2.jpg');
//         await wait(2);
//         currentImg.style.display = 'none';

//         currentImg = await createImage('./img/img-3.jpg');
//         await wait(2)
//         currentImg.style.display = 'none'

//     } catch (error) {
//         console.log(error);
//     }
// };

// loadNPause();

const loadAll = async (imgArr) => {
    const imgs = await imgArr.map((img) => {
        return createImage(img);
    })

    const images = await Promise.all(imgs);

    images.forEach(img => {
        img.classList.add('parallel')
    })
}

loadAll(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg'])