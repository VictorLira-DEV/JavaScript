"strict mode";

const container = document.querySelector(".container");

const users = [
    {
        nome: "Jessica",
        idade: "23",
        sexo: "Feminino",
        picture: "./pictures/woman1.JPG",
    },
    {
        nome: "Steven",
        idade: "11",
        sexo: "Masculino",
        picture: "./pictures/boy1.JPG",
    },
    {
        nome: "Dora",
        idade: "26",
        sexo: "Feminino",
        picture: "./pictures/woman3.JPG",
    },
    {
        nome: "Spike",
        idade: "33",
        sexo: "Masculino",
        picture: "./pictures/boy2.JPG",
    },
    {
        nome: "Emma",
        idade: "13",
        sexo: "Feminino",
        picture: "./pictures/girl2.JPG",
    },
];

users.forEach((item, index) => {
    let html = `
        <div class="user">
            <img src="${item.picture}">
            <div class="user_informations">
                <h2>nome: ${item.nome}</h2>
                <strong>Sexo:</strong> <span>${item.sexo}</span> <br/>
                <strong>Idade:</strong> <span>${item.idade}</span>
            </div>
        </div>
    `;

    container.insertAdjacentHTML('afterbegin', html);
});
