
const ShoopingCart2 = (function(){
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addCart = function(product, quantity){
        cart.push({product, quantity});

        console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`)
    }

    const orderStock = function(product, quantity){
        console.log(`${quantity} ${product} ordered from supplier`)
    }

    return {
        addCart,
        orderStock,
        cart,
        totalPrice,
        totalQuantity,
    }
})();
/*we can manpulate this even after the function execution, and this
works because of closures that allow function to have access to all the variables that were 
present at its birthplace, that keep the conection */

ShoopingCart2.addCart('apple', 4);
ShoopingCart2.addCart('pizza', 8);