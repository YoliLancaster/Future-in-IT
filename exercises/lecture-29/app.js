class AuthException extends Error {
  constructor(code, message) {
    super(code + ": " + (message || ""));
    this.name = "AuthException";
  }

  toString() {
    return this.message;
  }
}

let checkAuth = document.querySelector(".check-auth");

checkAuth.addEventListener("click", () => {
  try {
    let result = isAuth("Let`s go!");

    if (!result) {
      throw new AuthException(
        "FORBIDDEN",
        "You don't have access to this page"
      );
    } else {
      window.open("success.html", "_blank");
    }
  } catch (e) {
    let messageParagraph = document.querySelector(".message");
    if (messageParagraph) {
      messageParagraph.textContent = e.toString();
      showDialog();
    }
  }
});
