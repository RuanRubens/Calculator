const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function appendPi() {
    display.value += Math.PI.toFixed(8);
}

function appendPower() {
    display.value += '**';
}

function appendSquareRoot() {
    display.value += 'Math.sqrt(';
}

function closeSquareRoot() {
    display.value += ')';
}