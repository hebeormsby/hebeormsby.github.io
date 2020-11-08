function sumOdds() {

    // Input: user inputs a number
    let number = parseInt(document.getElementById('input').value);
    let i;
    let result = 0;

    // Processing
    for (i = 1; i <= number ; i++) {
        result += i;
        i++
        }

    // Output: display answer
    document.getElementById('output').innerHTML = result;

}