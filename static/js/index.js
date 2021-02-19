let questionDisplayBox = document.querySelector('#question');
let answerDisplayBox = document.querySelector('#answer');
let display = [];


// backspace function

let backspace = document.getElementById('backspace');
backspace.addEventListener('click', backSpace);
function backSpace() {
    display.pop();
    let arrLen = display.length;
    if (arrLen === 0) {
        let displayZero = questionDisplayBox.innerHTML = 0;
        return displayZero;
    }
    let backSpaceNum = questionDisplayBox.innerHTML = display.join('');
    return backSpaceNum
}


// clear function

let clear = document.getElementById('clear');
clear.addEventListener('click', clearQueAndAns);
function clearQueAndAns() {
    display = [];
    console.log(display);
    questionDisplayBox.innerHTML = 0;
    answerDisplayBox.innerHTML = 0;
}


// calls all numbers

let allNum = document.querySelectorAll('.num');
console.log(allNum);

allNum.forEach(num => {
    num.addEventListener('click', () => {
        let actualNum = num.innerHTML;
        console.log(actualNum);
        display.push(actualNum);
        questionDisplayBox.innerHTML = display.join('');
        console.log(display);
        let s = String(display);
        console.log(s);
        s.split(',');
        console.log('the length of s is :',s.length);
        let f = parseFloat(s)
        console.log(f);
        
    })
})


// calls all signs

let allSigns = document.querySelectorAll('.signs');
allSigns.forEach(sign => {
    sign.addEventListener('click', () => {
        let actualSign = sign.innerHTML;
        console.log(actualSign);
        display.push(actualSign);
        questionDisplayBox.innerHTML = display.join('');
        switch (actualSign) {
            case '<ion-icon name="close" role="img" class="md hydrated" aria-label="close"></ion-icon>':
                console.log('you click a multiply sign');
                // add function
                function add(num1, num2) {
                    console.log(num1+num2);
                }
                add(display[0],display[2]);
                break;
            case '<ion-icon name="remove" role="img" class="md hydrated" aria-label="remove"></ion-icon>':
                console.log('you click a minus sign');
                break;
            case '<ion-icon name="add" role="img" class="md hydrated" aria-label="add"></ion-icon>':
                console.log('you click a add sign');
                let a = display.indexOf(actualSign);
                let beforeA = a - 1;
                let afterA = a + 1;
                console.log(display[afterA]);
                let indexBeforeA = display[beforeA];

                console.log(display[beforeA]);
                break;
            case '/':
                console.log('you click a divide sign');
                break;
            default:
                break;
        }
        console.log(display);
        console.log(String(display));
    })
})


// equals function

let eq = document.querySelector('#equals');
eq.addEventListener('click', equal);

function equal() {
    console.log(String(display));
}

