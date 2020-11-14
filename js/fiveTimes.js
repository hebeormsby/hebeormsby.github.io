function fiveTimes() {
    //Input: define variables
    let output = "";

    //Processing: make a for loop repeat 12 times
    for (let i = 1; i <= 12; i++) {
        output += "5 x " + i + " = " + i*5 + '<br>';
    }
    //Ouput: display 5 times table between 1 - 12
    document.getElementById('output').innerHTML = output;
}