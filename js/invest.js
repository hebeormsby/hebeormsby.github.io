function doFV() {

    // Input: collect input data from user
    let principal = parseFloat(document.getElementById('principal').value);
    let annual = parseFloat(document.getElementById('annual').value);
    let years = parseFloat(document.getElementById('years').value);
    let periods = parseFloat(document.getElementById('periods').value);
    let message = "";
    let fV = computeFutureValue(principal, annual, years, periods);
    message = `Your Investment will be $${fV}.`;
    console.log(message);

    //Output: display investment worth
    document.getElementById('output').innerHTML = message;
}

//Formula: f = a (1 + r)^n 
//a = principal, r = annual rate, y = number of years, n = number of periods
function computeFutureValue(a, r, y, n) {
    return (a * ((1 + (r/n))**(y*n))).toFixed(2);
}