//o tempo setado não para execução dos códigos adiante

const ingredients = ['olives', 'spinach']
const pizzaTimer = setTimeout(
    (ing1, ing2) => console.log(`here is your pizza with ${ing1} and ${ing2}`),
    3000,
    ...ingredients
);
console.log("waiting");

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer)