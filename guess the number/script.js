(() => {
  let userinput = document.querySelector(".input-num");
  let form = document.querySelector("form");
  let submit = document.querySelector(".submit");
  let startgame = document.querySelector(".start-game");

  let result = document.querySelector(".result");
  let allguesses = document.querySelector(".allguesses");
  let randomNum = Math.round(Math.random() * 100);

  let guessArray = [];

  //EventListener

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let userValue = parseInt(userinput.value);
    if (userValue < randomNum) {
      result.innerText = "low";
    } else if (userValue > randomNum) {
      result.innerText = "high";
    } else {
      result.innerText = "congrate!";
      submit.disabled = true;
      startgame.disabled = false;
    }

    guessArray.push(userValue);
    allguesses.innerText = `your guesses are : ` + guessArray.join(" , ");

    form.reset();
  });
  startgame.addEventListener("click", () => {
    randomNum = Math.round(Math.random() * 100);
    result.innerText = "";
    submit.disabled = false;
    startgame.disabled = true;
    allguesses.innerText = "";
  });
})();
