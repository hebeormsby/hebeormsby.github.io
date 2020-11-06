function discount() {

    // Input: collect date from computer and user input
    let dayOfWeek = new Date().getDay();
    let purchase = parseFloat(document.getElementById('purchase').value);

    // Processing: Determines discount rate if user input is over 50 and if computer clock indicates it is Tuesday or Wednesday
    let rate;
    if (purchase > 50 && dayOfWeek == 2) {
        rate = 0.1;
    }
    else if (purchase > 50 && dayOfWeek == 3) {
        rate = 0.1;
    }
    else {
        rate = 0;
    }

    //Processing: calculate the discount
    let discount = purchase * rate;

    //Processing: calculate the price with discount
    let price = purchase - discount;
    
    //Processing: calculate tax price
    let tax = price * 1.06;

    //Round to the nearest hundreth
    let digits = 2;
    let multiplier = Math.pow(10, digits);
    tax = Math.round(tax * multiplier) / multiplier;

    //Output: display final price
    document.getElementById('output').innerHTML = 'Your final price comes to $' + tax +'.';
    }