function evennumber() {
    var first = parseInt(document.getElementById("number1").value);
    var second = parseInt(document.getElementById("number2").value);
    if (first > 100 || first < 2) {
        document.getElementById('resultarea').innerHTML = "Invalid input, please try again.";
    }
    if (second > 100 || second < 2) {
        document.getElementById('resultarea').innerHTML = "Invalid input, please try again.";
    }
}