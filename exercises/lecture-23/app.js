const alertElement = document.querySelector(".alert");

// TASK 1

function changeAlert() {
  alertElement.classList.add("alert-primary");
  alertElement.textContent = "A simple primary alert—check it out!";
}

// TASK 2
const buttonSecondary = document.querySelector(".btn-secondary");

buttonSecondary.addEventListener("click", () => {
  alertElement.classList.add("alert-primary");
  alertElement.textContent = "A simple secondary alert—check it out!";
});

// TASK 3
const buttonSuccess = document.querySelector(".btn-success");

buttonSuccess.addEventListener("mouseover", () => {
  alertElement.classList.add("alert-success");
  alertElement.textContent = "A simple success alert—check it out!";
});
buttonSuccess.addEventListener("mouseout", () => {
  alertElement.classList.remove("alert-success");
  alertElement.textContent = "";
});

// TASK 4
const buttonDanger = document.querySelector(".btn-danger");
buttonDanger.addEventListener("focus", () => {
  alertElement.classList.add("alert-danger");
  alertElement.textContent = "A simple danger alert—check it out!";
});
buttonSuccess.addEventListener("focusout", () => {
  alertElement.classList.remove("alert-danger");
  alertElement.textContent = "";
});

// TASK 5
const buttonDark = document.querySelector(".btn-dark");
const buttonLight = document.querySelector(".btn-light");

buttonLight.classList.add("hide");

function toggleMode() {
  document.body.classList.toggle("dark-mode");
  buttonDark.classList.toggle("hide");
  buttonLight.classList.toggle("hide");
}

buttonDark.addEventListener("click", toggleMode);
buttonLight.addEventListener("click", toggleMode);

// TASK 6
const buttonInfo = document.querySelector(".btn-info");
buttonInfo.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    alertElement.classList.add("alert-info");
    alertElement.textContent = "A simple info alert—check it out!";
  }
});

// TASK 7-8
const card = document.querySelectorAll(".card");

cardObject = {
  handleEvent: function (event) {
    console.log(event);
    console.log(event.target.offsetParent);
    let parent = event.target.offsetParent;
    console.log(parent.querySelector(".card-title").textContent);
  },
};
for (let i = 0; i < card.length; i++) {
  let addToCartButton = card[i].querySelector(".add-to-cart");
  addToCartButton.addEventListener("click", cardObject);
}
