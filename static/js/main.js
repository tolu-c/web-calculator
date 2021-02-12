// real functions
// variables (global)
let ansDisplay = new Array;
let questionDisplayBox = document.getElementById('question');
let answerDisplayBox = document.getElementById('answer');

// var for all number and operations
let num1 = document.getElementById('1');
let num2 = document.getElementById('2');
let num3 = document.getElementById('3');
let num4 = document.getElementById('4');
let num5 = document.getElementById('5');
let num6 = document.getElementById('6');
let num7 = document.getElementById('7');
let num8 = document.getElementById('8');
let num9 = document.getElementById('9');
let num0 = document.getElementById('0');
let point = document.getElementById('point');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let clear = document.getElementById('clear');

// event listener for all number and operations
// num1,num2,num3,num4,num5,num6,num7,num8,num9,num0,point,plus,minus,multiply,divide.addEventListener('click', allFunc);
num1.addEventListener('click', type1);
num2.addEventListener('click', type2);
num3.addEventListener('click', type3);
num4.addEventListener('click', type4);
num5.addEventListener('click', type5);
num6.addEventListener('click', type6);
num7.addEventListener('click', type7);
num8.addEventListener('click', type8);
num9.addEventListener('click', type9);
num0.addEventListener('click', type0);
point.addEventListener('click', typePoint);
plus.addEventListener('click', typePlus);
minus.addEventListener('click', typeMinus);
multiply.addEventListener('click', typeMultiply);
divide.addEventListener('click', typeDivide);

// typing functions
function type1() {
    let num = num1.id;
    console.log(num);
    ansDisplay.push(num);
    // console.log(ansDisplay);
    let output = questionDisplayBox.innerHTML = ansDisplay.join('');
    return output;
}
function type2() {
    let num = num2.id;
    console.log(num);
    ansDisplay.push(num);
    let output = questionDisplayBox.innerHTML = ansDisplay.join('');
    return output;
}
function type3() {
    let num = num3.id;
    console.log(num);
    ansDisplay.push(num);
    let output = questionDisplayBox.innerHTML = ansDisplay.join('');
    return output;
}
function type4() {
    let num = num4.id;
    console.log(num);
    ansDisplay.push(num);
    let output = questionDisplayBox.innerHTML = ansDisplay.join('');
    return output;
}
function type5() {
    let num = num5.id;
    console.log(num);
    ansDisplay.push(num);
    let output = questionDisplayBox.innerHTML = ansDisplay.join('');
    return output;
}
function type6() {
    let num = num6.id;
    console.log(num);
    ansDisplay.push(num);
    let output = questionDisplayBox.innerHTML = ansDisplay.join('');
    return output;
}
function type7() {
    let num = num7.id;
    console.log(num);
    ansDisplay.push(num);
    let output = questionDisplayBox.innerHTML = ansDisplay.join('');
    return output;
}
function type8() {
    let num = num8.id;
    console.log(num);
    ansDisplay.push(num);
    let output = questionDisplayBox.innerHTML = ansDisplay.join('');
    return output;
}
function type9() {
    let num = num9.id;
    console.log(num);
    ansDisplay.push(num);
    let output = questionDisplayBox.innerHTML = ansDisplay.join('');
    return output;
}
function type0() {
    let num = num0.id;
    console.log(num);
    ansDisplay.push(num);
    let output = questionDisplayBox.innerHTML = ansDisplay.join('');
    return output;
}
function typePoint() {
    let num = '.';
    console.log(num);
    ansDisplay.push(num);
    let output = questionDisplayBox.innerHTML = ansDisplay.join('');
    return output; 
}
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
function allFunc() {
    
}

// backspace function
let backspace = document.getElementById('backspace');
backspace.addEventListener('click', backSpace);
function backSpace() {
    ansDisplay.pop();
    let backSpaceNum = questionDisplayBox.innerHTML = ansDisplay.join('');
    return backSpaceNum
}

// clear function
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