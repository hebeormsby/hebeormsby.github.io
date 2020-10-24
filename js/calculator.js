function calculator() {
    //Input: Enter two numbers and choose an operator

    let num1 = parseFloat(document.getElementById('number1').value);
    let num2= parseFloat(document.getElementById('number2').value);
    let num3 = parseFloat(document.getElementById('answer').value);
    let operator = (document.getElementById('operator').value);
    //Processing: combine two numbers together using chosen operator and use switch case to identify the operator
    
    let message;
    let answer;
    switch(operator) {
        case '+':
            answer = parseFloat(num1 + num2);
            if (num3 == answer){
                message = "Correct! 🏆"
            } else {
                message = "Incorrect 😥"
            }
            break;
        case '-':
            answer = parseFloat(num1 - num2);
            if (num3 == answer){
                message = "Correct! 🏆"
            } else {
                message = "Incorrect 😥"
            }
            break;
        case '*':
            answer = parseFloat(num1 * num2);
            if (num3 == answer){
                message = "Correct! 🏆"
            } else {
                message = "Incorrect 😥"
            }
            break;
        case '/':
            answer = parseFloat(num1/num2);
            if (num3 == answer){
                message = "Correct! 🏆"
            } else {
                message = "Incorrect 😥"
            }
            break;         
    }

   
    //Output: Check answer and send output message saying either correct or incorrect
    document.getElementById('output').innerHTML = message
}