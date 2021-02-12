// real functions
// variables (global)
let ansDisplay = new Array;
let questionDisplayBox = document.getElementById('question');
let answerDisplayBox = document.getElementById('answer');

let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');

function typePlus() {
    let sign = plus.innerHTML;
    console.log(sign);
    ansDisplay.push(sign);
    let output = questionDisplayBox.innerHTML = ansDisplay.join('');
    return output;
}
function typeMinus() {
    let sign = minus.innerHTML;
    console.log(sign);
    ansDisplay.push(sign);
    let output = questionDisplayBox.innerHTML = ansDisplay.join('');
    return output;
}
function typeMultiply() {
    let sign = multiply.innerHTML;
    console.log(sign);
    ansDisplay.push(sign);
    let output = questionDisplayBox.innerHTML = ansDisplay.join('');
    return output;
}
function typeDivide() {
    let sign = divide.innerHTML;
    console.log(sign);
    ansDisplay.push(sign);
    let output = questionDisplayBox.innerHTML = ansDisplay.join('');
    return output;
}

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
    questionDisplayBox.innerHTML = 0;
    answerDisplayBox.innerHTML = 0;
}

// equals function
let eq = document.getElementById('equals');
eq.addEventListener('click', output);
function output() {
    alert()
}