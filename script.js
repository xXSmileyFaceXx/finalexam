function evennumber() {
    var first = parseInt(document.getElementById("number1").value);
    var second = parseInt(document.getElementById("number2").value);
    var error = 0;
    if (first > 100 || first < 2) {
        document.getElementById('resultarea').innerHTML = `Number 1 input ${first} is not a valid number`;
        error = 1;
    }
    if (second > 100 || second < 2) {
        document.getElementById('resultarea').innerHTML = `Number 2 input ${second} is not a valid number`;
        error = 1;
    }
    if (error == 0){
        var min, max;
        var answer = [];
        if (first < second) {
            min = first;
            max = second;
        } else {
            min = second;
            max = first;
        }
    }
}