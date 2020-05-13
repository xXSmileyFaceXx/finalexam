function evennumber() {
    var first = parseInt(document.getElementById("number1").value);
    var second = parseInt(document.getElementById("number2").value);
    if (first > 100 || first < 2) {
        document.getElementById('resultarea').innerHTML = `Number 1 input ${first} is not a valid number`;
    }
    if (second > 100 || second < 2) {
        document.getElementById('resultarea').innerHTML = `Number 2 input ${second} is not a valid number`;
    }
}