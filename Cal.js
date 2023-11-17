function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

document.addEventListener('keypress', (event) => {
    var name = event.key;
});

function clearScreenKey() {
    document.getElementById("result").name = "";
}

function displayKey(name) {
    document.getElementById("result").name += name;
}

function calculateKey() {
    var p = document.getElementById("result").name;
    var q = eval(p);
    document.getElementById("result").name = q;
}