"use Strict";

const people = [
  {
    id: 134645,
    name: "Amanda",
    age: 18,
  },
  {
    id: 3434355,
    name: "Cassia",
    age: 22,
  },
  {
    id: 34343,
    name: "Jessica",
    age: 12,
  },
  {
    id: 34344,
    name: "Venônica",
    age: 40,
  },
];

//How to replace Jessica with Carlos then put him at the same position
const jessica = people.findIndex((item) => item.name === "Jessica");
const carlos = {
  id: 23434,
  name: "Carlos",
  age: 40,
};

people.fill(carlos, jessica, jessica + 1);
console.log(people);
