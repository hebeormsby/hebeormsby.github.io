function alarm() {

    // Input: collect date and time from computer
    let now = new Date();
    let month = now.getMonth();
    let dayofMonth = now.getDate();
    let dayofWeek = now.getDay();

    // Processing: Define/check which days are considered a holiday and weekend
    if (month == 0 && dayofMonth == 1 || month == 6 && dayofMonth == 4 || month == 11 && dayofMonth == 25 || dayofWeek == 0 || dayofWeek == 6) {
        message = 'Sleep In!';
    }
    else {
        message = 'Get Up!';
    }

    //Output: displays message
    document.getElementById('output').innerHTML = message;
    }