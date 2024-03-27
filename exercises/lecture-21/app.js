// TASK 1
const fruits = "apple banana cantaloupe blueberries grapefruit";
let fruitsArray = fruits.split(" ");
console.log(fruitsArray);

// TASK 2
for (let i = 0; i <= fruitsArray.length; i++) {
  console.log(i); //індекси масиву
  console.log(fruitsArray[i]); //назви фруктів
}

// TASK 3
let i = 0;
while (i <= fruitsArray.length) {
  console.log(fruitsArray[i]);
  i++;
}

// TASK 4
do {
  console.log(fruitsArray[i]);
  i++;
} while (i <= fruitsArray.length);

// TASK 5
for (fruit of fruitsArray) {
  console.log(fruit);
}

// TASK 6
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (num of Numbs) {
  if (num % 2 == 0) {
    console.log(num);
  }
}

// TASK 7
const names = ["Batman"];
names.push("Joker");
console.log(names);

// TASK 8
const newNames = ["Joker"].concat(names);
console.log(newNames);

// TASK 9
names = ["Batman", "Joker", "Bane"];
names.unshift("Catwoman");
console.log(names);

// TASK 10
names = ["Batman", "Joker", "Bane"];
const newArray = ["Catwoman", ...names];

// TASK 11
names.splice(1, 0, "Catwoman");
console.log(names);

// TASK 12
const names1 = ["Batman", "Catwoman", "Joker", "Bane"];

const newNames1 = [...names1.slice(0, 1), ...names1.slice(1 + 2)];

console.log(newNames1);

// TASK 13
let removed = names1.splice(1, 2, "Alfred");
console.log(names1);

// TASK 14
const names2 = ["Batman", "Catwoman", "Joker", "Bane"];
names2.includes("Alfred") ? names2 : names2.push("Alfred");
console.log(names2);

// TASK 15
names2.includes("Alfred") ? names2.pop("Alfred") : names2;
console.log(names2);
