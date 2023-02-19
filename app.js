// Load ui elements

const displayResult = document.querySelector("#result");
const clearDisplay = document.querySelector("#clear");
const dividedBy = document.querySelector("#divide");
const multiplyBy = document.querySelector("#multiply");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const percent = document.querySelector("#percentage");
const zero = document.querySelector("#zero");
const period = document.querySelector("#period");
const backSpace = document.querySelector("#back-space");
const minus = document.querySelector("#plus");
const raisedToPower = document.querySelector("#raised-to-the-power");
const equalTo = document.querySelector("#equal");

// document.querySelector('#result').style.color = 'white';
displayResult.value = "0"; //for input we use .value not textContent

// Load event listener
loadEventListeners();

function loadEventListeners() {
  clearDisplay.addEventListener("click", clearScreen);
  zero.addEventListener("click", submitZero);
  one.addEventListener("click", submitOne);
}

function submitZero() {
  if (displayResult.value === "0") {
    displayResult.value = "0";
  } else {
    displayResult.value + "0";
  }
  console.log(displayResult.value);
}

function submitOne() {
  if (displayResult.value === "0") {
    displayResult.value = "1";
  } else {
    "1".concat(displayResult.value);
  }
  console.log(displayResult.value);
}

function clearScreen() {
  displayResult.value = "0";
  console.log("Screen cleared");
}
