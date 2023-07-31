import randomNumber from "./src/utils/randomNumber.js";
import displayMessage from "./src/utils/displayMessage.js";

//Random number between 1 and 20
let secretNumber = randomNumber;
let score = 10;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  //Get the value from the input, transform the string into a value and store in "guess" variable
  let guess = Number(document.querySelector(".guess").value);
  //When the user does not input a value, display a message. The following only works if it is true. So, "guess" is 0 so its falsy value, but with the not operator, transforms to true.
  if (!guess) {
    displayMessage("Enter a number!");
    //When the user wins
  } else if (guess === secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("Correct number!");
    document.querySelector("body").style.backgroundImage =
      "-webkit-radial-gradient(center, #3fa8c6 0%,#339cb9 25%, #0f3d6e 100%)";
    document.querySelector(".number").style.width = "20rem";
    document.querySelector(".number").style.fontSize = "8rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //When the user enters an input out of the allowed range
  } else if (guess > 20 || guess < 1) {
    displayMessage("Between 1 and 20");
    //When the user inputs a valid number but the guess is wrong
  } else if (guess !== secretNumber) {
    //When the input is to high or low
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //When the user looses the game
      displayMessage("GAME OVER!");
      document.querySelector("body").style.backgroundImage =
        "-webkit-linear-gradient(top, #ffc719 0%, #bf033b 100%)";
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".score").textContent = 0;
    }
  }
});
//Play again/reset scores
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = randomNumber;
  displayMessage("Start Guessing!");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundImage =
    "-webkit-linear-gradient(top, #339cb9 0%,#3fa8c6 20%,#ff9ab2 100%)";
  document.querySelector(".number").style.width = "15vw";
  document.querySelector(".number").style.fontSize = "6rem";
});
