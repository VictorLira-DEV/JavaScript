'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
let text = document.querySelector('textarea');
button.textContent = 'Click';

button.addEventListener('click', () => {
    let content = text.value;

    const rows = content.split('\n');


    for (const [index, row] of rows.entries()) {
        const [first, second] = row.toLowerCase().trim().split('_');
        const output = `${first} ${second.replace(second[0], second[0].toUpperCase())}`
        console.log(` ${output.padEnd(20, ' ')}${'@'.repeat(index + 1)}`)
    }
})




// underscore_case 
// first_name 
// some_variable 
// calculate_age 
// delayed_departure
// underscore_case 
// first_name 
// some_variable 
// calculate_age 
// delayed_departure 