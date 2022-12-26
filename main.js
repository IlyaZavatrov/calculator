const mainInput = document.getElementById ("mainInput");
let exp = '';

function press(num) {
    exp += num;
    mainInput.value = exp;
}

function equal() {
    mainInput.value = eval(exp);
    exp = '';
}

function clearValue() {
    exp = '';
    mainInput.value = exp;
}