const menu = ['pessego', 'morango', 'maçã', 'peira', 'abacaxi']

for (const item of menu) console.log(item)

//GETTING THE ITEM 
//DSTRUCTURING
for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
}

// console.log([...menu.entries()]);


