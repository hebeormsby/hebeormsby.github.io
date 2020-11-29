function doPayment() {
    //Input: collect input data from user
    let principal = parseFloat(document.getElementById('principal').value);
    let annual = parseFloat(document.getElementById('annual').value);
    let years = parseFloat(document.getElementById('years').value);
    let periods = parseFloat(document.getElementById('periods').value);

    //Processing
    let paymentOutput = computePayment(principal, annual, years, periods);

    //Output: display payment to user
    document.getElementById('paymentOutput').innerHTML = `Your payment is $` + (paymentOutput).toFixed(2) + `.`;
}

function doBalance() {
    //Input: collect input data from user
    let principal = parseFloat(document.getElementById('principal').value);
    let annual = parseFloat(document.getElementById('annual').value);
    let years = parseFloat(document.getElementById('years').value);
    let periods = parseFloat(document.getElementById('periods').value);
    let toDate = parseFloat(document.getElementById('toDate').value);

    //Processing
    let payment = computePayment(principal, annual, years, periods);
    let balanceOutput = computeBalance(principal, annual, years, periods, toDate);

    //Output: display balance to user
    document.getElementById('balanceOutput').innerHTML = `Your balance is $` + (balanceOutput).toFixed(2) + `.`;
}

function computePayment(principal, annual, years, periods) {

    //Returns payment
    return (principal * (annual/periods)) / (1 - (1 + annual/periods))**-(years*periods);
}

function computeBalance(principal, annual, years, periods, toDate) {
    
    let payment = computePayment(principal, annual, years, periods);
    let r = annual/periods;
    //Returns balance
    return (principal * ((1 + r)**toDate) - (payment*(((1 + r)**toDate) - 1)/r));
}