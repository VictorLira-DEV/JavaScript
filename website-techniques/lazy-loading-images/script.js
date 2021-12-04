const imgTargets = document.querySelectorAll("img[data-src]");

const loading = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    entry.target.src = entry.target.dataset.src;
    entry.target.addEventListener("load", function () {
        entry.target.classList.remove("filter");
    });

    observer.unobserve(entry.target);
};

const imagesObserver = new IntersectionObserver(loading, {
    root: null,
    threshold: 0,
    rootMargin: "200px",
});

imgTargets.forEach((img) => imagesObserver.observe(img));
