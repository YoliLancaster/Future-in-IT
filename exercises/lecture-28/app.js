const form = document.getElementById("registrationForm");
const userName = document.getElementById("username");
const userEmail = document.getElementById("email");
const password = document.getElementById("password");
const showError = document.getElementById("errorMessages");
const successMessage = document.getElementById("successMessages");

const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const lengthRegExp = /^.{8,}$/;
const complexityRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{1,}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isValidEmail = emailRegExp.test(userEmail.value);
  const isValidLength = lengthRegExp.test(password.value);
  const isValidComplexity = complexityRegExp.test(password.value);

  if (!userName.value.trim()) {
    showError.textContent = "Username cannot be empty";
  } else if (!isValidEmail) {
    showError.textContent = "Email should be valid";
  } else if (!isValidLength) {
    showError.textContent = "Password should be longer than 8 digits";
  } else if (!isValidComplexity) {
    showError.textContent =
      "The password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
  } else {
    userName.value = "";
    userEmail.value = "";
    password.value = "";
    showError.textContent = "";
  }
  successMessage.textContent = "Well done!";
});
