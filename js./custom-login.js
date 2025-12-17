// console.log("hello world");
// Checks that the file is loaded

// const form = document.querySelector("#login-form");
// const output = document.querySelector("#login-message");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();

//   const name = document.querySelector("#name").value;
//   const email = document.querySelector("#email").value;
//   const password = document.querySelector("#password").value;
// At first, I didn’t fully understand how FormData worked, so I looked for a way to directly access what the user typed into the inputs. 
// I already knew how to select elements with querySelector from HTML and CSS, so I tried reading the input values using .value, which worked

//   console.log({ name, email, password });
  // Shorthand object logging: I logged the values to the console to check if everything worked. 
  // I later learned that JavaScript allows a shorter way to write objects when the variable names match the keys

//   output.textContent = `Welcome, ${name}! You are logged in!`;
//   form.style.display = "none";
  // BONUS: hides the form
// });

const form = document.querySelector("#login-form");
const output = document.querySelector("#login-message");

function onFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());

  console.log({
    name: dataObject.name,
    email: dataObject.email,
    password: dataObject.password
  });

  output.textContent = `Welcome, ${dataObject.name}! You are logged in!`;

  form.style.display = "none";
  // BONUS

  form.reset();
}

form.addEventListener("submit", onFormSubmit);







