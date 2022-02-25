const account1 = {
    owner: "Jonas Schmedtmann",
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: "Jessica Davis",
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: "Steven Thomas Williams",
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: "Sarah Smith",
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
  const accounts = [account1, account2, account3, account4];
  
  //flat
  const overalBalance = accounts.map(acc => acc.movements);
  const allBalance = overalBalance.flat(1); //esse argumento representa 1 nível de produndidade

  console.log(allBalance)
  const reducedBalance = allBalance.reduce((accumulator, item) => accumulator + item);
  console.log(reducedBalance)
  
  //flatMap
  const overalBalance2 = accounts.flatMap(acc => acc.movements);
  const allBalance2 = overalBalance2.reduce((accumulator, item) => accumulator + item);
  console.log(allBalance2)
  
  // const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
  // const arrDeep = [[1, 2, 3, [4, 5, 6]], 7, 8];
  // console.log(arr.flat());
  // console.log(arrDeep.flat(2)); //esse parâmetro (2) representa a profundidade do array
  