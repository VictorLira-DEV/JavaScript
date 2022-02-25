const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const restaurant = {
  name: "Classic italian",
  location: "Via angelo Tavari 23,  Finzere, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  startMenu: ["Foccacia", "Bruschetta", "Garlic", "Bread", "Caprese Salac"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (startedIndex, mainIndex) {
    return [this.startMenu[startedIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    startedIndex = 1,
    mainIndex = 1,
    time = "20:00",
    address,
  }) {
    console.log(
      `ordered received ${this.startMenu[startedIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //open 24 hours
      close: 24,
    },
  },
};

const openingHours = {
  //we can compute property names instead of write them manually
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, //open 24 hours
    close: 12 + 12,
  },
};

//THIS IS THE OLD WAY
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//WITH OPTIONAL CHAINING
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.sat.open);

//example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`On ${day},  we open  at ${open}`);
}

//methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");

console.log(restaurant.orderRisoto?.(0, 1) ?? "Method does not exist");

//array
const users = [{ name: "Jonas", email: "hello@jonas.io" }];

console.log(users[0]?.name ?? "User array empty");
