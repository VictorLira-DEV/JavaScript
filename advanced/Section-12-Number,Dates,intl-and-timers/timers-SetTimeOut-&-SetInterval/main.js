const ingridients = ["olives", "spinach"];

const pizzaTimer = setTimeout(
    (eng1, eng2) => {
        console.log(`Here is your pizza with ${eng1} and ${eng2}`);
        //depois do tempo 3000 podemos adicionar os argumentos
    },
    3000,
    ...ingridients
); //3 mil milisegundos

console.log("waiting");
//clearTimeOut: basicamente cancela a callbackfunction
if (ingridients.includes("spinach")) clearTimeout(pizzaTimer);
