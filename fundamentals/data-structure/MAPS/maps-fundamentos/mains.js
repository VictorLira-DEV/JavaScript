'use strict'
//o map pode ter o key de any data type

const rest = new Map;
rest.set('name', 'Classico Italiano',);
rest.set(1, 'Firenze, Italy');


console.log(rest.set(2, 'Lisbon, Portugal'));

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'we are open')
    .set(true, 'We are open :D')
    .set(false, 'We are closed')


// console.log(rest.get('name'))
// console.log(rest.get(true))

const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
rest.delete(2)


const arr = [1, 2];
// rest.set(document.querySelector('h1'), 'Heading')
rest.set(arr, 'Test');
// console.log(rest)
// console.log(rest.size)

// console.log(rest.get(arr));
