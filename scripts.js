const display = document.querySelector(".display input");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value.replace("%", "/100"));
    } catch {
        display.value = "Error";
    }
}
