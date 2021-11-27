import { students } from './testing.js';


// console.log(students);

/*now we use await without async functions 
BUT THIS BLOCKS THE EXECUTION OF THE ENTIRE MODULE*/

// console.log('Before fetching');
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);

// console.log('loaded after the fetch function');

const getLastPost = async function () {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await res.json();
    console.log(data);

    return {
        title: data.at(-1).title,
        text: data.at(-1).body,
    };
};

// const lastPost = getLastPost();
// lastPost.then(last => {
//     console.log(last);
// });


/*the code in this main script has to wait till the module finish
this will run run after all import finish execution
in this case we are blocking executio in the testing file using top level await, using it
will block the entire module*/

const lastPost2 = await getLastPost();
console.log(lastPost2)
