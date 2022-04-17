const products = [
  {
    name: "desktop",
    price: 3000,
  },
  {
    name: "laptop",
    price: 2000,
  },
  {
    name: "phone",
    price: 1000,
  },
];

console.log(
  products.sort((a, b) => {
    if (a.price < b.price) {
      return 1;
    }
    if (a.price > b.price) {
      return -1;
    }
  })
);
