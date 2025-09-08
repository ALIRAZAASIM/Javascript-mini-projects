let input = document.querySelector("input");
let previousvalue = ""; // keep it outside so it persists
let firstThreeNumber = "";

input.addEventListener("input", (e) => {
  let inputvalue = e.target.value;

  // If user typed 4 chars and is increasing
  if (inputvalue.length === 4 && previousvalue.length < inputvalue.length) {
    firstThreeNumber = inputvalue.substring(0, 3);
    input.value = `+${firstThreeNumber} - ${inputvalue[inputvalue.length - 1]}`;
  }
  // If user deletes back to 9 chars
  else if (
    inputvalue.length === 9 &&
    previousvalue.length > inputvalue.length
  ) {
    input.value = firstThreeNumber;
  }

  previousvalue = input.value; // update after logic
});
