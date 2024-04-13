const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const fetchPromise = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

fetchPromise(url).then((posts) => {
  let result = "";
  posts.forEach((item) => {
    result += template(item);
  });
  document.getElementById("blog").innerHTML = result;

  const authorSpans = document.querySelectorAll(".author");
  authorSpans.forEach((span) => {
    const userId = span.getAttribute("data-id");
    fetchPromise(`https://jsonplaceholder.typicode.com/users/${userId}`).then(
      (user) => {
        span.textContent = user.name;
      }
    );
  });
});
