let textValues = ["coder", "developer", "youtuber"];
const spanValue = document.querySelector("span");
let word = 0;
let character = 0;

let reversetype = false;

let intervalId = setInterval(() => {
  if (character === textValues[word].length) {
    reversetype = true;
  }

  if (!reversetype) {
    spanValue.innerText = spanValue.innerText + textValues[word][character];
    character++;
  } else {
    spanValue.innerText = spanValue.innerText.slice(
      0,
      spanValue.innerText.length - 1
    );
  }

  if (spanValue.innerText.length === 0 && reversetype) {
    reversetype = false;
    character = 0;
    word++;
  }

  if (word === textValues.length) {
    word = 0;
  }
}, 200);
