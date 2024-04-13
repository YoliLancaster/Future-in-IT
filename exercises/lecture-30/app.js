const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;

async function waitForFormSubmission() {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  let firstNameInput = document.querySelector('input[name="firstName"]');
  let lastNameInput = document.querySelector('input[name="lastName"]');
  let h1Element = document.getElementById("waiting");

  let firstName = firstNameInput.value.trim();
  let lastName = lastNameInput.value.trim();

  if (firstName === "" && lastName === "") {
    h1Element.textContent = "I'm miss You";
  } else {
    h1Element.textContent = `Hello ${firstName} ${lastName}!`;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  waitForFormSubmission();
});

let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let response = JSON.parse(xhr.responseText);
    let demoElement = document.getElementById("demo");

    response.forEach((item) => {
      let postTemplate = template(item);
      demoElement.insertAdjacentHTML("beforeend", postTemplate);
    });
  } else {
    console.error("Failed to load posts:", xhr.status, xhr.statusText);
  }
};

xhr.send();
