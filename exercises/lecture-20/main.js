// TASK 1
let person = {
  name: "Jackie",
  age: 30,
};
console.log(person.name, person.age);

// TASK 2
const person1 = {
  name: {
    firstName: "James",
    lastName: "Bond",
  },
  age: 32,
};
console.log(person1.name.firstName, person1.name.lastName, person1.age);
console.log(JSON.stringify(person1));

// TASK 3
person.bio = function () {
  return `${this.name.firstName} ${this.name.lastName}, ${this.age}`;
};
console.log(person.bio());

// TASK 4
person.introduceSelf = function () {
  return `Hi! I'm ${this.name.firstName}`;
};
console.log(person.introduceSelf());

// TASK 5 функція-шаблон
function createPerson(name) {
  return {
    name: name,
    introduceSelf: function () {
      return console.log(`Hello, my name is ${this.name}`);
    },
  };
}

let person3 = createPerson("Alice");
let person4 = createPerson("Bob");

// TASK 6 функція-конструктор
//Створити функцію-конструктор Person, що приймає аргумент name та повертає новий об'єкт з властивістю name та методом introduceSelf. Створити за допомогою Person 2 екземпляри об'єкта mary та tom.
function Person(name) {
  this.name = name;
  this.introduceSelf = function () {
    return console.log(`Hello, my name is ${this.name}`);
  };
}

let person5 = new Person("Mary");
let person6 = new Person("Tom");

person3.introduceSelf();
person4.introduceSelf();

// TASK 6.1
//визначити, чи містить об'єкт mary властивість під назвою prop.
console.log(Object.hasOwnProperty(person3, "prop"));

// TASK 7
const DirtyMartini = {
  english_please: function () {
    return `ingredients:
        6 fluid ounces gin
        1 dash dry vermouth (0.0351951ml) 
        1 fluid ounce brine from olive jar
        4 stuffed green olives`;
  },
  excuse_my_french: function () {
    return `ingrédients:  
        170.4786 ml de gin
        1 trait de vermouth sec (0.0351951ml) 
        28.4131 ml de saumure du pot d'olive
        4 olives vertes farcies`;
  },
};

console.log(DirtyMartini.english_please());
console.log(DirtyMartini.excuse_my_french());
