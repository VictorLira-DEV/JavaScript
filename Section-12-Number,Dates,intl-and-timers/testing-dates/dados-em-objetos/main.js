const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
    interestRate: 1.2,
    pin: 1111,
    movementsDates: [
        "2021-06-27T21:31:17.178Z",
        "2019-12-23T07:42:02.383Z",
        "2020-01-28T09:15:04.904Z",
        "2020-04-01T10:17:24.185Z",
        "2020-05-08T14:11:59.604Z",
        "2021-06-20T17:01:17.194Z",
        "2020-07-11T23:36:17.929Z",
        "2021-06-22T10:51:36.790Z",
    ],
    currency: "EUR",
    locale: "pt-PT", // de-DE
};

const label = document.querySelector('.list_of_dates')
//horas do navegador do usuário
const locale = navigator.language; //en-US

const options = {
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
}

account1.movementsDates.forEach((item, index) => {
    let li = document.createElement('li');
    const newDate = new Date(item);
    const newLi = new Intl.DateTimeFormat(/*'pt-BR'*/locale, options).format(newDate);
    li.innerHTML = newLi;

    label.appendChild(li)
})



