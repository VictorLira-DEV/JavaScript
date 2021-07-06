const priceGB = '288,97&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');
console.log(priceGB);
console.log(priceUS);
const announcement = 'All passangers come to boarding door 23. boarding door 23!'

console.log(announcement.replace('door', 'gate')) // apenas replace na primeira ocorrencia
console.log(announcement.replaceAll('door', 'gate')) //replace everyone