
// make numbers appear on display on click
const btnNums = document.getElementsByClassName("number");
const display = document.getElementById("display");
let displayVal = "";

for (let i = 0; i < btnNums.length; i++) {
    btnNums[i].addEventListener('click', displayNums);
}

function displayNums() {
    displayVal += "" + this.value;
    display.value = displayVal;
    return displayVal;
}

// when an operator button is clicked
const btnOperators = document.getElementsByClassName("operator");
let operands = [];
let operators = [];

for (let i = 0; i < btnOperators.length; i++) {
    btnOperators[i].addEventListener('click', () => {
        operands.push(displayVal);
        displayVal = "";
        operators.push(btnOperators[i].name);
    });
}

// equals sign
const equals = document.getElementById("equals");
equals.addEventListener('click', () => {
    operands.push(displayVal);
    let result;

    if (operands[operands.length - 1] === "") {
        displayVal = 'ERROR';  // maybe change this later
        display.value = displayVal;
        return;
    } else if (operators.length === 0) {
        displayVal = "";
        operands = [];
        return;
    } else if (operands.length === 2) {
        result = operate(operators[0], operands[0], operands[1]);
        display.value = round(result,11);
        displayVal = "";
        operands = [];
        operators = [];    
    } else if (operators.length > 1) {
        if (operators.includes('multiply') || operators.includes('divide')) {
            return; // change this to something fancy;
        } else {
            for (let i = 0, j = 0; i < operators.length; i+=2, j++) {
                result = operate(operators[j], operands[i], operands[i+1]);
            }
        }
    }
});

function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}

// REPLACED THE FOLLOWING FUNCTION WITH THE ABOVE SYNTAX:
// function displayNums() {
//     let displayVal;
//     for (let i = 0; i < btnNums.length; i++) {
//         btnNums[i].addEventListener('click', () => {
//             displayVal = btnNums[i].value;
//             display.value = displayVal;
//         });
//     }
// }
// displayNums();

// clear
const btnClear = document.getElementById('clear');
btnClear.addEventListener('click', () => {
    displayVal = "";
    display.value = "0";
    operands = [];
    operators = [];
})

function operate(operator, x, y) {
    let result;

    if (operator === 'plus') {
        result = add(x, y);
    } else if (operator === 'minus') {
        result = subtract(x, y);
    } else if (operator === 'multiply') {
        result = multiply(x, y);
    } else if (operator === 'divide') {
        result = divide(x, y);
    }
    return result;
}

function add(a, b) {
    const c = +a + +b;
    return c;
}

function subtract(a, b) {
    const c = a - b;
    return c;
}

function multiply(a, b) {
    const c = a * b;
    return c;
}

function divide(a, b) {
    let c;
    if (b == "0") {
        c = 'Cannot.';
    } else {
        c = a / b;
    }
    return c;
}
