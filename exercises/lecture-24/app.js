const colors = ["blue", "green", "white"];

// TASK 1
function iter(item) {
  console.log(item);
}
colors.forEach(iter);

// TASK 2
function iterate(item, index) {
  if (index === colors.length - 1) {
    console.log("The last iteration!");
  }
  console.log(`${item} with index ${index}`);
}
colors.forEach(iterate);

// TASK 3
const letters = ["a", "b", "c"];
function iterate(letter) {
  console.log(this === window);
}
letters.forEach(iterate);

// TASK 4
const numbers = [22, 3, 4, 10];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    console.log(number);
  }
});

// TASK 5
function getEven(element) {
  return element % 2 === 0;
}
console.log(numbers.every(getEven));

// TASK 6
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
// function find(fruit) {
//   return fruit === "blueberries";
// }
// console.log(fruits.findIndex(find));
const index = fruits.findIndex((fruit) => fruit === "blueberries");
console.log(index);

// TASK 7
const arr = [7, 33, 47, 99, 2, 103, 79];
const found = arr.find((el) => el > 10);
console.log(found);

// TASK 8
const array = [1, 2, 3, 4, 5];
const even = array.some((item) => item % 2 === 0);
console.log(even);

// TASK 9
const numbers1 = [1, 30, 4, 21, 100000];
numbers1.sort(function (a, b) {
  return a - b;
});
console.log(numbers1);
