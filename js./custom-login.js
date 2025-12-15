const form = document.querySelector("#login-form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 


const name = document.querySelector("#name").value;
const email = document.querySelector("#email").value;
const password = document.querySelector("#password").value;

 console.log({
    name: name,
    email: email,
    password: password
    });

   
const message = `Welcome, ${name}! You are logged in!`;

   
form.style.display = "none";

let output = document.querySelector("#login-message");

if (!output) {
        output = document.createElement("p");
        output.id = "login-message";
        document.body.appendChild(output);
    }

    output.textContent = message;
});
