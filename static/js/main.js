// real functions
// variables (global)
let ansDisplay = new Array;
let questionDisplayBox = document.getElementById('question');
let answerDisplayBox = document.getElementById('answer');

// refactored function

let allNum = document.querySelectorAll('.num');
// es6
allNum.forEach(num => {
    num.addEventListener('click', (e) => {
        let actualNum = num.innerHTML;
        console.log(actualNum);
        ansDisplay.push(actualNum);
        console.log(ansDisplay);
        let output = questionDisplayBox.innerHTML = ansDisplay.join('');
        return output;
    })
})

let allSigns = document.querySelectorAll('.signs');
allSigns.forEach(sign => {
    sign.addEventListener('click', (e) => {
        let actualSign = sign.innerHTML;
        console.log(actualSign);
        ansDisplay.push(actualSign);
        let output = questionDisplayBox.innerHTML = ansDisplay.join('');
        return output;
    })
})

let ansArr = ansDisplay;
console.log(ansArr);
let p = document.getElementById('plus');
p.addEventListener('click', add);


// operations functions //num1, num2
function add() {
    // let findIndexOfPlus = ansDisplay.findIndex(function(sign, [1], ansDisplay) {
        
    // });
    console.log(findIndexOfPlus);
    // num1 = Number(ansDisplay[0]);
    // num2 = Number(ansDisplay[2]);
    // console.log(`${num1}`); //, ${num2}
    // num1++;
    // let result = num1 + num2;
    // console.log(result);
}
function minus(num1, num2) {
    let result = num1 + num2;
    return result;
}
function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
function divide(num1, num2) {
    let result = num1 / num2;
    return result;
}
function percent(num1, num2) {
    let result = (num1 / num2) * 100;
    return result;
}

// backspace function
let backspace = document.getElementById('backspace');
backspace.addEventListener('click', backSpace);
function backSpace() {
    ansDisplay.pop();
    let arrLen = ansDisplay.length;
    if (arrLen === 0) {
        let displayZero = questionDisplayBox.innerHTML = 0;
        return displayZero;
    }
    let backSpaceNum = questionDisplayBox.innerHTML = ansDisplay.join('');
    return backSpaceNum
}

// clear function
let clear = document.getElementById('clear');
clear.addEventListener('click', clearQueAndAns);
function clearQueAndAns() {
    ansDisplay = [];
    console.log(ansDisplay);
    questionDisplayBox.innerHTML = 0;
    answerDisplayBox.innerHTML = 0;
}

// equals function
let eq = document.getElementById('equals');
eq.addEventListener('click', output);
function output() {
    alert()
}