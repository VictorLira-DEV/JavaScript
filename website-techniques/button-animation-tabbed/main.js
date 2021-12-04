const btnWrapper = document.querySelector(".button_wrapper");
const allBtn = document.querySelectorAll(".btn");
const operationButtons = document.querySelectorAll('.operations_btn');

btnWrapper.addEventListener("click", function (e) {
    const clicked = e.target.closest(".btn");
    if (!clicked) return;
    //removing classes
    allBtn.forEach((btn) => btn.classList.remove("active"));
    operationButtons.forEach(b => b.classList.remove('operation_active'));

    operationButtons.forEach(b => b.classList.add('operation_hidden'))

    //adding  classes
    const operationContent = document
        .querySelector(`.operations-content--${clicked.dataset.tab}`);

    operationContent.classList.remove('operation_hidden');
    operationContent.classList.add('operation_active');
    clicked.classList.add('active');
});
