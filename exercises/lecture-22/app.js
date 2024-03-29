// TASK 1
let allH1Titles = document.querySelectorAll("h1");
// або ж document.querySelector('h1').textContent якщо саме вміст заголовка потрібен
console.log(typeof "allH1Titles");
console.log(allH1Titles.length);
for (let i = 0; i <= allH1Titles.length; i++) {
  console.log(allH1Titles[i]);
}

// TASK 2
let firstParagraph = document.querySelector("#p1").textContent;
document.getElementById("p1").style.backgroundColor = "gold";

// TASK 3
document.getElementById("p2").style.backgroundColor = "gold";
document.getElementById("p2").style.color = "blue";
document.getElementById("p2").style.fontSize = "2rem";

// TASK 4
let thirdParagraph = document.querySelector("#p3");
thirdParagraph.className = "third";

// TASK 5
document.querySelector("#p3").className = "fourth";
document.querySelector("#p3").className = "border"; // тут можна було якось в 1 рядок написати?

// TASK 6
const element = document.getElementsByClassName("container");

for (let i = 0; i < element.length; i++) {
  console.log(element[i].firstElementChild);
}

// TASK 7
for (let i = 0; i < element.length; i++) {
  console.log(element[i].firstElementChild.textContent);
}

// TASK 8
const classes = ["first", "second", "third", "fourth"];

let headers = document.querySelectorAll(".container header");
for (i = 0; i < headers.length; i++) {
  const header = headers[i];
  const h1 = header.querySelector("h1");

  if (i === 0) {
    h1.outerHTML = `<h1 class="${h1.className}" id="${h1.id}">${h1.textContent}</h1>`;
  } else {
    const newTag = `h${i + 1}`;
    h1.outerHTML = `<${newTag} class="${h1.className}" id="${h1.id}">${h1.textContent}</${newTag}>`;
  }
}

headers = document.querySelectorAll(
  ".container header h1, .container header h2, .container header h3, .container header h4"
);

for (let i = 0; i < headers.length; i++) {
  headers[i].classList.add(classes[i]);
}
