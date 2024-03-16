// TASK 1
let str1 = "I'm a string!";
let str2 = "I'm a string!";

console.log(str1 == str2); //true
console.log(str1 === str2); //true

// TASK 2
let string5 = "Hello World";
console.log(string5.charAt(1)); //e

// TASK 3
// повернути символ J рядка:
let str3 = "Hello Javascript";
console.log(str3.charAt(6));

// TASK 4
let lastChar1 = str[str.length - 1];
let lastChar2 = str.charAt(-1);

// TASK 5
function lastChar(str3) {
  return str3.slice(-1);
}

function lastChar(str3) {
  return str3.substring(str3.length - 1);
}

function lastChar(str3) {
  return str3[str3.length - 1];
}

// TASK 6
let a = "When candles are out,";
let b = "all cats are grey.";
console.log(a.concat(b));

// TASK 7
let fact = "Fifteen is the same as";
let c = 5;
let d = 10;
console.log(fact + (c + d));

// TASK 8
let firstName = "Tom";
let lastName = "Cat";

function getFullName(a, b) {
  return a + " " + b;
}

console.log(getFullName(firstName, lastName));

// TASK 9
function greeting(a) {
  return "Hello, " + a + "!";
}

console.log(greeting(getFullName(firstName, lastName)));

// TASK 10
function greeting(a) {
  return "<div><h1>Hello, " + a + "!</h1></div>";
}

// TASK 11
let string1 = "  The name of our game  ";
// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"
string1.trim();
string1.trimEnd();
string1.trimStart();

const phoneNumber = "\t  555-123\n ";
// Потрібно отримати такі результати
// => '555-123'
console.log(phoneNumber.trimStart().trimEnd());
// => '555-123 \n'
console.log(phoneNumber);

// TASK 12
let sentence = "Always look on the bright side of life";
console.log(sentence.includes("look up"));
console.log(sentence.includes("look on"));
let startIndex = 8;
console.log(sentence.includes("look on", startIndex));

// TASK 13

console.log(sentence.indexOf("l"));
console.log(sentence.indexOf("l", 3));
console.log(sentence.indexOf("L"));

// TASK 14 - slice теж підходить
console.log(sentence.substring(6));
console.log(sentence.substring(6, 10)); // console.log(sentence.search('look'));
console.log(sentence.substring(0, 6)); // console.log(sentence.search('Always'));

// TASK 15
const usernameRegex = /^[a-z0-9_-]{8,16}$/;

// TASK 16
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// TASK 17
let sentence1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.";
function truncateText(text) {
  if (text.length <= 50) {
    return text;
  } else {
    return text.substring(0, 50) + "...";
  }
}

let truncated1 = truncateText(sentence1);
console.log(truncated1);

function truncateText(text) {
  if (text.length <= 50) {
    return text;
  } else {
    return text.substr(0, 50) + "...";
  }
}

let truncated2 = truncateText(sentence1);
console.log(truncated2);
