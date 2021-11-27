export const students = ['Sandra', 'John', 'Steven', 'Roger'];

console.log('start fetching users')
await fetch(`https://jsonplaceholder.typicode.com/users`);
console.log('Finish fetching users')