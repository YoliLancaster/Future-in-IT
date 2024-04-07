const ul = document.querySelector("ul");
const input = document.getElementById("item");

let itemsArray = JSON.parse(localStorage.getItem("items")) || [];

// Функція для додавання завдання до списку
function addTask(text) {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
}

// Функція для додавання нового елемента до масиву та localStorage
function add() {
  const newItem = input.value.trim(); // Видаляємо зайві пробіли
  if (newItem !== "") {
    itemsArray.push(newItem);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    addTask(newItem);
    input.value = "";
  }
}

// Функція для очищення localStorage, масиву та відображення списку
function del() {
  localStorage.removeItem("items");
  itemsArray = [];
  ul.innerHTML = "";
}

itemsArray.forEach(addTask);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    add();
  }
});
