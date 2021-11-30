'use strict';
/*With object.freeze we can still change object object inside another object */
/*can can't change the first level */
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

/*optional chaining */
const getLimit = (limits, user) => limits?.[user] ?? 0;
//Object.freeze makes it be immutable
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

//pure function
const addExpense = function (state, limits, value, description, user) {
  if (!user) user = 'jonas';
  const cleanUser = user.toLowerCase();

  // let limit = spendingLimits[user] ? spendingLimits[user] : 0
  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// const checkExpenses = function (state, limits) {
//     return state.map(entry => {
//         return entry.value < -getLimit(limits, entry.user) ? {...entry, flag: 'limit'} : entry
//     })
// };

const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

//inpure function
const LogBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    // .map(entry => entry.description.slice(-2)).join('/')
    .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, '');

  /*this is a side effect*/ console.log(bigExpenses);

  //   let output = '';
  //   for (const entry of budget) {
  //     output +=
  //       entry.value <= -bigLimit ? `${entry.description.slice(-2)} /` : '';
  //   }

  //   output = output.slice(0, -2); // Remove last '/ '
  //   console.log(output);
};
console.log(budget);
LogBigExpenses(finalBudget, 500);
