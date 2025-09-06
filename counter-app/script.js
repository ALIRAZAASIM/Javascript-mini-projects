const counter = document.querySelector(".count-num");
const increment = document.querySelector(".inc-num");
const decrement = document.querySelector(".dec-num");
const change = document.querySelector("#change");
const reset = document.querySelector(".reset");

// Event listener
increment.addEventListener("click", () => {
  const count = parseInt(counter.innerText);
  const changeValue = parseInt(change.value);
  counter.innerText = count + changeValue;
});
decrement.addEventListener("click", () => {
  const count = parseInt(counter.innerText);
  const changeValue = parseInt(change.value);
  counter.innerText = count - changeValue;
});
reset.addEventListener("click", () => {
  counter.innerText = 0;
});
