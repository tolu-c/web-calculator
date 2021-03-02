//  global variables

let answerBox = document.querySelector("#answer");
let questionBox = document.querySelector("#question");
let containerArr = new Array();
let numArray = new Array();
let clear = document.querySelector("#clear");
let backspace = document.querySelector("#backspace");
let eq = document.querySelector("#equals");
const allNum = document.querySelectorAll(".num");
const allSigns = document.querySelectorAll(".signs");
let allSignsArray = Object.values(allSigns);
let c = allSignsArray.map((b) => b.textContent);
let num1, num2;

let num, actualNum, sign, actualSign, x;

// console.log(allSigns);

// eventListener

clear.addEventListener("click", clearFunc);
backspace.addEventListener("click", backspaceFunc);
eq.addEventListener("click", equals);

// functions

// clear function
function clearFunc() {
  questionBox.textContent = 0;
  answerBox.textContent = 0;
  containerArr = [];
  numArray = [];
}

// backspace function
function backspaceFunc() {
  numArray.pop();
  containerArr.pop();
  answerBox.textContent = numArray.join("");
  let aL = numArray.length;
  if (aL > 0) {
    answerBox.textContent = numArray.join("");
  } else {
    answerBox.textContent = 0;
  }
}
// fix the backspace only for the numArray in the answerBox

// num functions
allNum.forEach((num) => {
  num.addEventListener("click", () => {
    // if (num.textContent) {
    //   actualNum = 0.0;
    // }
    actualNum = num.textContent;
    console.log(`the number clicked is ${actualNum}`);
    numArray.push(actualNum);
    containerArr.push(actualNum);
    let x = numArray.join("");
    let num1 = Number(x);
    answerBox.textContent = x;
    console.log(`the number array is ${numArray}`);
    console.log(`number is ${x}`);
  });
});
// have to fix the '.' shii

// signs function
allSigns.forEach((sign) => {
  sign.addEventListener("click", () => {
    actualSign = sign.textContent;
    console.log(actualSign);
    containerArr.push(actualSign);

    // makes it possible that when a sign is clicked before a number has no effect(like that)
    if (containerArr.lastIndexOf(actualSign) === 0) {
      if (actualSign === "+" || actualSign === "-") {
        let x = 0;
        containerArr.unshift(x);
      } else if (actualSign === "/" || actualSign === "×") {
        containerArr.pop();
        // let x = 1;
        // containerArr.unshift(x);
      }
    }

    let currentIndexOfSign = containerArr.lastIndexOf(actualSign);
    // let nextIndexOfSign = initialIndexOfSign + 1;
    let beforeIndexOfSign = currentIndexOfSign - 1;
    // debugging console

    // console.log(containerArr);
    // console.log(`the index of ${actualSign} is ${currentIndexOfSign}`);
    // console.log(`the index before of ${actualSign} is ${beforeIndexOfSign} and its current value is
    // ${containerArr[beforeIndexOfSign]}`);
    // console.log(
    //   `the value before ${actualSign} is ${containerArr[beforeIndexOfSign]}`
    // );
    // ensures a sign clicked more than once has no effect
    if (containerArr[currentIndexOfSign] === containerArr[beforeIndexOfSign]) {
      console.log(`you hit ${actualSign} twice`);
      containerArr.pop();
    }
    // makes changing of signs possible after a sign has been originally clicked
    // checks both current and before current index are both signs
    // and not signs and nums
    if (containerArr[currentIndexOfSign] !== containerArr[beforeIndexOfSign]) {
      if (
        c.includes(containerArr[currentIndexOfSign]) &&
        c.includes(containerArr[beforeIndexOfSign])
      ) {
        console.log("true");
        containerArr[beforeIndexOfSign] = containerArr[currentIndexOfSign];
        containerArr.pop();
        console.log(containerArr);
      }
    }

    switch (actualSign) {
      case "+":
        break;

      default:
        break;
    }

    numArray = [];
    questionBox.textContent = containerArr.join("");
  });
});

// equals function
function equals() {
  console.log("equals");
}
