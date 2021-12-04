const nav = document.querySelector(".menu");

const handlerOver = function (e) {
    const clicked = e.target;
    const logo = clicked.closest("header").querySelector("img");

    if (clicked.classList.contains("nav__link")) {
        const buttonOpenAccount = clicked
            .closest(".menu")
            .querySelector("button");
        const allNavigation = [
            ...clicked.closest(".nav__links").querySelectorAll(".nav__link"),
        ];

        allNavigation.forEach((el) => {
            if (el !== clicked) {
                el.style.opacity = this;
            }
        });
        buttonOpenAccount.style.opacity = this;
        logo.style.opacity = this;
    }
};

nav.addEventListener("mouseover", handlerOver.bind(0.5));
nav.addEventListener("mouseout", handlerOver.bind(1));
