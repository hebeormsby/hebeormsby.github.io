function fixedLoops() {

    //Fix #1
    let output1 = " ";
    let i = 0;

    while (i < 2) {
        output1 += `Part 1:${i}<br>`;
        i += 1;
    }

    //Fix #2
    let output2 = " ";

    for (let j = 0; j < 3; j++) {
        if (j !== 2) {
            output2 += `Part 2:${j}, `;
        }
        else {
            output2 += `Part 2:${j}`;
        }
    }

    //Fix#3
    let output3 = " ";

    for (let k = 0; k < 4; k++) {
        output3 += k + " ";
    }

    //Fix #4
    let balance = 10000;
    const rate = .10;
    let n = 30;

    for (s = 0; s < n; s++) {
        interest = balance * rate;
        balance += interest;
    }

    //Output: Display fixed loops
    document.getElementById('display1').innerHTML = output1;
    document.getElementById('display2').textContent = output2;
    document.getElementById('display3').textContent = output3;
    document.getElementById('display4').textContent = balance;
}

//Fix #5
let i = 0;
while (i < 3); {
    // valid statements (this is not the problem)
    i++;
}

//
