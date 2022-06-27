// DOM consts

const value = document.getElementById("screen");

const acButton = document.querySelector(".btn__special--ac");

const lpButton = document.querySelector(".btn__special--leftPar");
const rpButton = document.querySelector(".btn__special--rightPar");
const divisionButton = document.querySelector(".btn__op--division");
const multButton = document.querySelector(".btn__op--mult");
const minusButton = document.querySelector(".btn__op--minus");
const plusButton = document.querySelector(".btn__op--plus");
const equalButton = document.querySelector(".btn__op--equal");
const zeroButton = document.querySelector(".btn__number--0");
const oneButton = document.querySelector(".btn__number--1");
const twoButton = document.querySelector(".btn__number--2");
const threeButton = document.querySelector(".btn__number--3");
const fourButton = document.querySelector(".btn__number--4");
const fiveButton = document.querySelector(".btn__number--5");
const sixButton = document.querySelector(".btn__number--6");
const sevenButton = document.querySelector(".btn__number--7");
const eightButton = document.querySelector(".btn__number--8");
const nineButton = document.querySelector(".btn__number--9");
const decimalButton = document.querySelector(".btn__number--decimal");

const numberBtnArray = [
  zeroButton,
  oneButton,
  twoButton,
  threeButton,
  fourButton,
  fiveButton,
  sixButton,
  sevenButton,
  eightButton,
  nineButton,
];

// Variables

let opNow = null;
let valueNow = null;
let lastValue = String(value.innerHTML).slice(-1);
let result = "p";

// Last value

function last() {
  lastValue = String(value.innerHTML).slice(-1);
}

// Buttons

zeroButton.onclick = () => {
  if (value.innerHTML === 0 || value.innerHTML == result) {
    value.innerHTML = 0;
  } else if (
    lastValue === "." ||
    value.innerHTML != 0 ||
    String(value.innerHTML).includes(".0")
  ) {
    value.innerHTML += 0;
  }
  last();
};

oneButton.onclick = () => {
  if (value.innerHTML === "0" || value.innerHTML == result) {
    value.innerHTML = 1;
    result = "p";
  } else if (lastValue == "." || value.innerHTML !== "0") {
    value.innerHTML += 1;
  }
  last();
};

twoButton.onclick = () => {
  if (value.innerHTML === "0" || value.innerHTML == result) {
    value.innerHTML = 2;
    result = "p";
  } else if (lastValue == "." || value.innerHTML !== "0") {
    value.innerHTML += 2;
  }
  last();
};

threeButton.onclick = () => {
  if (value.innerHTML === "0" || value.innerHTML == result) {
    value.innerHTML = 3;
    result = "p";
  } else if (lastValue == "." || value.innerHTML !== "0") {
    value.innerHTML += 3;
  }
  last();
};

fourButton.onclick = () => {
  if (value.innerHTML === "0" || value.innerHTML == result) {
    value.innerHTML = 4;
    result = "p";
  } else if (lastValue == "." || value.innerHTML !== "0") {
    value.innerHTML += 4;
  }
  last();
};

fiveButton.onclick = () => {
  if (value.innerHTML === "0" || value.innerHTML == result) {
    value.innerHTML = 5;
    result = "p";
  } else if (lastValue == "." || value.innerHTML !== "0") {
    value.innerHTML += 5;
  }
  last();
};

sixButton.onclick = () => {
  if (value.innerHTML === "0" || value.innerHTML == result) {
    value.innerHTML = 6;
    result = "p";
  } else if (lastValue == "." || value.innerHTML !== "0") {
    value.innerHTML += 6;
  }
  last();
};

sevenButton.onclick = () => {
  if (value.innerHTML === "0" || value.innerHTML == result) {
    value.innerHTML = 7;
    result = "p";
  } else if (lastValue == "." || value.innerHTML !== "0") {
    value.innerHTML += 7;
  }
  last();
};

eightButton.onclick = () => {
  if (value.innerHTML === "0" || value.innerHTML == result) {
    value.innerHTML = 8;
    result = "p";
  } else if (lastValue == "." || value.innerHTML !== "0") {
    value.innerHTML += 8;
  }
  last();
};

nineButton.onclick = () => {
  if (value.innerHTML === "0" || value.innerHTML == result) {
    value.innerHTML = 9;
    result = "p";
  } else if (lastValue == "." || value.innerHTML !== "0") {
    value.innerHTML += 9;
  }
  last();
};

plusButton.onclick = () => {
  if (value.innerHTML == 0) {
    value.innerHTML = value.innerHTML;
  } else {
    value.innerHTML += "+";
  }
  last();
};

minusButton.onclick = () => {
  if (value.innerHTML == 0) {
    value.innerHTML = value.innerHTML;
  } else {
    value.innerHTML += "-";
  }
  last();
};

divisionButton.onclick = () => {
  if (value.innerHTML == 0) {
    value.innerHTML = value.innerHTML;
  } else {
    value.innerHTML += "/";
  }
  last();
};

multButton.onclick = () => {
  if (value.innerHTML == 0) {
    value.innerHTML = value.innerHTML;
  } else {
    value.innerHTML += "*";
  }
  last();
};

acButton.onclick = () => {
  value.innerHTML = 0;
};

lpButton.onclick = () => {
  if (value.innerHTML == 0) {
    value.innerHTML = "(";
  } else {
    value.innerHTML += "(";
  }
  last();
};

rpButton.onclick = () => {
  if (value.innerHTML == 0) {
    value.innerHTML = value.innerHTML;
  } else if (String(value.innerHTML).includes("(")) {
    value.innerHTML += ")";
  }
  last();
};

decimalButton.onclick = () => {
  if (lastValue === ".") {
    value.innerHTML = value.innerHTML;
    last();
  } else if (
    String(
      value.innerHTML.includes(".") &&
        (String(value.innerHTML).includes("+") ||
          String(value.innerHTML).includes("-") ||
          String(value.innerHTML).includes("×") ||
          String(value.innerHTML).includes("÷")) &&
        lastValue !== "."
    )
  ) {
    value.innerHTML += ".";
    last();
  }
};

equalButton.onclick = () => {
  try {
    result = eval(value.innerHTML);
  } catch (e) {
    value.innerHTML = "Error 😭";
  }

  if (value.innerHTML == "Error 😭") {
    value.innerHTML = value.innerHTML;
  } else {
    result = eval(value.innerHTML);
    value.innerHTML = result;
  }
};
