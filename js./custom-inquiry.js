// console.log("hello world");

// const form = document.querySelector("#form");
// const output = document.querySelector("#thank-you-message");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const name = document.querySelector("#name").value;
//   const email = document.querySelector("#email").value;
//   const phone = document.querySelector("#phonenumber").value;
//   const comment = document.querySelector("#comment").value;
//   const flavor = document.querySelector("#flavors").value;

//   const reasonValue = document.querySelector("input[name='reason']:checked")?.value;
// When I tried to read the selected radio button, my code broke if nothing was selected. 
// I searched why that happens and learned that querySelector can return null. 
// I then found a way to read the value so the code wouldn’t crash
// optional chaining  looks for the radio input that has name="reason" (so it’s part of the reason radio group) and
// is currently :checked (the one the user selected). When the user selected a reason, that selector returns the checked input element.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
// https://www.youtube.com/watch?v=RA8RHgzPokk

//   let reasonText = "contacting us";
//   if (reasonValue === "coffee") reasonText = "buying coffee";
//   if (reasonValue === "employment") reasonText = "seeking employment";
// This logic is based on conditional statements using if. I remember this concept from my high school IT classes, where we often used if statements to change behavior depending on a condition. 
//I applied the same idea here to adjust the text based on the user’s selection.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else

//   console.log({
//     name,
//     email,
//     phone,
//     comment,
//     flavor,
//     reason: reasonValue
//   });

//   const resultText = `Thank you ${name}! We appreciate your interest in ${reasonText}. Your favorite coffee flavor is ${flavor} and your comments are: ${comment}. We will contact you at ${email} or ${phone}.`;

//   output.textContent = resultText;
//   form.style.display = "none";
// I wanted the form to go away after submission so that only the message would remain. 
// I knew from CSS that display: none makes an element invisible, so I applied that from JavaScript using .style.display
// });


const form = document.querySelector("#form");
const output = document.querySelector("#thank-you-message");

function onFormSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  const dataObject = Object.fromEntries(data.entries());

  console.log(dataObject);


  output.textContent =
    `Thank you ${dataObject.name}! We appreciate your interest in ${dataObject.reason}. 
    Your favorite coffee flavor is ${dataObject.flavors} and your comments are ${dataObject.comment}. 
    We will soon contact you at ${dataObject.email} or ${dataObject.phonenumber}.`;
  

  form.style.display = "none";
 

  form.reset();
}

form.addEventListener("submit", onFormSubmit);
