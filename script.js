const display = document.getElementById('display');
let currentInput = '';

function appendNumber(num) {
    currentInput += num;
    display.innerText = currentInput;
}

function appendOperator(op) {
    currentInput += ' ' + op + ' ';
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput.replace('×', '*').replace('÷', '/'));
        display.innerText = currentInput;
    } catch (e) {
        display.innerText = 'Error';
    }
}
