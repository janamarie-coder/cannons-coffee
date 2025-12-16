console.log("hello world");

const form = document.querySelector("#form");
const output = document.querySelector("#thank-you-message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phonenumber").value;
  const comment = document.querySelector("#comment").value;
  const flavor = document.querySelector("#flavors").value;

  const reasonValue = document.querySelector("input[name='reason']:checked")?.value;

  let reasonText = "contacting us";
  if (reasonValue === "coffee") reasonText = "buying coffee";
  if (reasonValue === "employment") reasonText = "seeking employment";

  console.log({
    name,
    email,
    phone,
    comment,
    flavor,
    reason: reasonValue
  });

  const resultText = `Thank you ${name}! We appreciate your interest in ${reasonText}. Your favorite coffee flavor is ${flavor} and your comments are: ${comment}. We will contact you at ${email} or ${phone}.`;

  output.textContent = resultText;
  form.style.display = "none";
});
