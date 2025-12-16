console.log("hello world");

const form = document.querySelector("#login-form");
const output = document.querySelector("#login-message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  console.log({ name, email, password });

  output.textContent = `Welcome, ${name}! You are logged in!`;
  form.style.display = "none";
});






