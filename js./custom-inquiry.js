const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
event.preventDefault();

const name = document.querySelector("#name").value;
const email = document.querySelector("#email").value;
const phone = document.querySelector("#phonenumber").value;
const comment = document.querySelector("#comment").value;
const flavor = document.querySelector("#flavors").value;

const reasonInput = document.querySelector("input[name='reason']:checked");

let reasonText = "";
    if (reasonId === "coffee") {
        reasonText = "buying coffee";
    } else if (reasonId === "employment") {
        reasonText = "seeking employment";
    } else {
        reasonText = "contacting us";
    }const reasonId = reasonInput ? reasonInput.id : "";

console.log({
        name: name,
        email: email,
        phone: phone,
        comment: comment,
        flavor: flavor,
        reason: reason
     });

const resultText = `
Thank you ${name}! We appreciate your interest in ${reason}. 
Your favorite coffee flavor is ${flavor}and your comments are ${comments}. 
We will soon contact you at ${email} or  ${number}. `;

form.style.display = "none";

let output = document.querySelector("#thank-you-message");
if (!output) {
        output = document.createElement("p");
        output.id = "thank-you-message";
        document.body.appendChild(output);
    }

 output.textContent = resultText;
});