const restaurant = {
    name: 'Pizzaria do osmar',
    pizzas: [
        {name: 'Pizza', sabor: 'calabresa', preco: 30.99 },
        {name: 'Pizza', sabor: 'portuguêsa', preco: 20.44 },
        {name: 'Pizza', sabor: 'quatro queijos', preco: 50}
    ],
    bebidas: [
        {name: 'refrigerante', sabor: 'coca cola', preco: 7},
        {name: 'refrigerante', sabor: 'pepsi', preco: 5 },
        {name: 'suco', sabor: 'goiaba', preco: 10}
    ],
    perdido: function ({nome, pizzaIndex, bebidaIndex, endereco}) {
        console.log(`pedido para o senhor ${nome} de ${this.pizzas[pizzaIndex].name} sabor ${this.pizzas[pizzaIndex].sabor} valor ${this.pizzas[pizzaIndex].preco} mais ${this.bebidas[bebidaIndex].name} ${this.bebidas[bebidaIndex].sabor} valor ${this.bebidas[bebidaIndex].preco} total a paragar ${this.bebidas[bebidaIndex].preco + this.pizzas[pizzaIndex].preco}`)
    }
    
}

restaurant.perdido({
    nome: 'Gabriel',
    pizzaIndex: 0,
    bebidaIndex: 2,
    endereco: 'estrada caçaroca'
})


restaurant.perdido({
    nome: 'Izabela',
    pizzaIndex: 2,
    bebidaIndex: 0,
    endereco: 'guarapari'
})


