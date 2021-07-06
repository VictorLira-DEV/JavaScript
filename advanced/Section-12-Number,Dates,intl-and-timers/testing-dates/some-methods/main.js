const now = new Date();
const day = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();
const hour = now.getHours();
const minutes = now.getMinutes();

console.log(`${day}/${month}/${year} ${hour}:${minutes}`)