function PoundsToKilograms(){
    //Input: enter amount in pounds
    let x = parseFloat(document.getElementById('pounds').value);

    //Irocessing: convert pounds to kilograms
    let kilograms = x *0.453592;
    //Round to the 10th decimal place
    let digits = 1;
    let multiplier = Math.pow(10, digits);
    kilograms = Math.round(kilograms * multiplier) / multiplier;

    //Output: display number in kilograms
    document.getElementById('output').innerHTML = x + "pounds converts to" + kilograms + "kilograms.";
}