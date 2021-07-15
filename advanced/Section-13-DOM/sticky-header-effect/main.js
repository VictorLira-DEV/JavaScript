const nav = document.querySelector(".menu");
const section2 = document.querySelector(".section--2");
const album = document.querySelector(".album");

//setting the mergin top
const navHeight = nav.getBoundingClientRect().height;
album.style.paddingTop = `${navHeight}px`;

const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
};

const landscapeObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0.1,
});
landscapeObserver.observe(section2);
