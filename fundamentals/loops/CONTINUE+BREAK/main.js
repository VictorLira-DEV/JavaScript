// continue irá pular o valor em questão e irá continuar o looping
 
for (let i = 0; i <= 10; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}

// //ao atingir o break, simplesmente irá parar

for (let i = 0; i <= 10; i++) {
  console.log(i);
  if (i === 3) {
    break;
  }
}
