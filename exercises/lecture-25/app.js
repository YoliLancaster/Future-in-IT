// TASK 1
const list = ["html", "css", "javascript", "react.js"];

let ul = document.createElement("ul");
let li;
list.forEach((item) => {
  li = document.createElement("li");
  li.innerText = `${item} `;
  ul.appendChild(li);
});
document.body.appendChild(ul);

// TASK 2
const listWithHref = [
  { html: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { css: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { "react.js": "https://react.dev" },
];
let linkList = document.createElement("ol");

listWithHref.forEach((item) => {
  for (let key in item) {
    li = document.createElement("li");
    let a = document.createElement("a");
    a.href = item[key];
    a.innerText = key;
    li.appendChild(a);
    linkList.appendChild(li);
  }
});
document.body.appendChild(linkList);

// TASK 3
const students = [
  { firstName: "Tom", lastName: "Cat", degree: 230 },
  { firstName: "Nary", lastName: "Ann", degree: 336 },
  { firstName: "John", lastName: "Doe", degree: 400 },
  { firstName: "James", lastName: "Bond", degree: 700 },
];

let table = document.createElement("table");
let tableHead = document.createElement("thead");

let tr = document.createElement("tr");
tr.classList.add("head");

const headers = Object.keys(students[0]);

headers.forEach((item) => {
  let th = document.createElement("th");
  th.textContent = item;
  tr.appendChild(th);
});
tableHead.appendChild(tr);
table.appendChild(tableHead);

students.forEach((student) => {
  let tr = document.createElement("tr");
  headers.forEach((header) => {
    let td = document.createElement("td");
    td.textContent = student[header];
    tr.appendChild(td);
  });

  tableHead.appendChild(tr);
});
document.body.appendChild(table);
