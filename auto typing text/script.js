let textValues = ["ali", "raza", "asim", "ashu"];
const spanValue = document.querySelector("span");
let word = "aliraza";
let character = 0;
let intervalId = setInterval(() => {
  if (character === word.length - 1) clearInterval(intervalId);
  spanValue.innerText = spanValue.innerText + word[character];
  character++;
}, 500);
