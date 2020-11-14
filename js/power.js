function power() {

    //Input: define variables
    let output = "";

    for (let i = 0; i <= 31; i++ ) {
        output += Math.pow(2,i) + ", ";
    }
    document.getElementById('output').innerHTML = output;
}