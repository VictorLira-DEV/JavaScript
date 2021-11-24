'use strict';
const imagesContainer = document.querySelector('.images');

//Promissifying settimeout
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
            imagesContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};

let currentImg;
const image1 = createImage('./img/img-1.jpg')
    .then(img => {
        currentImg = img;
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('./img/img-2.jpg');
    })
    .then(img => {
        currentImg = img;
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
        return createImage('./img/img-3.jpg');
    })
    .then(img => {
        currentImg = img;
        return wait(2);
    })
    .then(() => {
        currentImg.style.display = 'none';
    })
    .catch(error => {
        console.error(error);
    });
