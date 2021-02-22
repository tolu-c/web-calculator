let questionDisplayBox = document.querySelector("#question");
let answerDisplayBox = document.querySelector("#answer");
let display = [];

// clear function

let clear = document.querySelector("#clear");
clear.addEventListener("click", clearQueAndAns);
function clearQueAndAns() {
  display = [];
  console.log(`display box is ${display}`);
  questionDisplayBox.innerHTML = 0;
  answerDisplayBox.innerHTML = 0;
}

// backspace function

let backspace = document.getElementById("backspace");
backspace.addEventListener("click", backSpace);
function backSpace() {
  display.pop();
  console.log(`new array is [${display}]`);
  let arrLen = display.length;
  if (arrLen === 0) {
    let displayZero = (questionDisplayBox.innerHTML = 0);
    return displayZero;
  }
  let backSpaceNum = (questionDisplayBox.innerHTML = display.join(""));
  return backSpaceNum;
}

// calls all numbers

let allNum = document.querySelectorAll(".num");
//console.log(allNum);

allNum.forEach((num) => {
  num.addEventListener("click", () => {
    let actualNum = num.textContent;
    console.log(actualNum);
    //questionDisplayBox.textContent = actualNum;
    display.push(actualNum);
    questionDisplayBox.textContent = display.join("");
    //console.log(display);
    let s = String(display.join(""));
    let n = Number(s);
    //console.log(`${n} + 2 is `,n+2);
  });
});

// calls all signs

let allSigns = document.querySelectorAll(".signs");
allSigns.forEach((sign) => {
  sign.addEventListener("click", () => {
    let actualSign = sign.textContent;
    display.push(actualSign);
    questionDisplayBox.textContent = display.join("");
    console.log(`you clicked ${actualSign}`);
    let indexOfSign = display.indexOf(actualSign);
    let x = Number(display.slice(0, indexOfSign).join(''));
    let lastIndexOfSign = display.lastIndexOf(actualSign);
    let y = display.slice(indexOfSign+1, lastIndexOfSign)
    let result;
    let removeArray;
    switch (actualSign) {
      case "×":
        console.log("you click a multiply sign");
        break;
      case "-":
        console.log("you click a minus sign");
        break;
      case "+":
        console.log("you click a add sign");
        console.log(`orginal array`, display);
        console.log(x);
        console.log(`new array`, display);
        if (y.length != 0) {
            console.log(y)
        }
        else {
            console.log(`y is empty`)
        }
        result = x + Number(y);
        console.log(`sum is ${result}`);
        removeArray = display.splice(0,lastIndexOfSign);
        removeArray = String(result);
        display.unshift(removeArray);
        answerDisplayBox.innerHTML = result;
        break;
      case "/":
        console.log("you click a divide sign");
        if (y.length != 0) {
            console.log(y)
        }
        else {
            console.log(`y is empty`)
        }
        result = x / Number(y);
        console.log(`division is ${result}`);
        removeArray = display.splice(0,lastIndexOfSign);
        removeArray = String(result);
        display.unshift(removeArray);
        answerDisplayBox.innerHTML = result;
        break;
      default:
        break;
    }
  });
});
