// TASK 1
function calculate(operation, initialValue, numbers) {
  let result = initialValue;
  for (const number of numbers) {
    result = operation(result, number);
  }
  return result;
}

// sum() - це функція, яка описує операцію додавання.
function sum(n1, n2) {
  return n1 + n2;
}

// multiply() - це функція, яка описує операцію множення.

function multiply(n1, n2) {
  return n1 * n2;
}

console.log(calculate(sum, 0, [1, 2, 4])); // => 7
console.log(calculate(multiply, 1, [1, 2, 4])); // => 8

// TASK 2
let student_names = ["Wick", "Malcolm", "Smith"];
function mapWithDetails(array, callback) {
  return array.map((item, index, arr) => {
    return callback(item, index, arr);
  });
}

function printDetails(name, index, array) {
  console.log(
    `name: ${name} | index: ${index} | array: [ "${array.join('", "')}" ]`
  );
}

mapWithDetails(student_names, printDetails);

// TASK 3
let students_information = [
  { name: "Wick", degree: 375 },
  { name: "Malcolm", degree: 405 },
  { name: "Smith", degree: 453 },
];

const maxDegree = 600;

let updatedStudents = students_information.map((student) => {
  const percentage = (student.degree / maxDegree) * 100;
  return { ...student, percentage };
});

console.log(updatedStudents);

// TASK 4
let nestedArray = [
  1,
  2,
  3,
  [10, 11, 12],
  21,
  22,
  23,
  [31, 32, 33, 34],
  [41, 42],
];

let flattenedArray = nestedArray.reduce((acc, current) => {
  return acc.concat(Array.isArray(current) ? current : [current]);
}, []);

console.log(flattenedArray);

// TASK 5
Array.prototype.upperCase = function () {
  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] === "string") {
      this[i] = this[i].toUpperCase();
    }
  }
};

function myFunc() {
  let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
  arr.upperCase();
  console.log(arr);
}

myFunc();
