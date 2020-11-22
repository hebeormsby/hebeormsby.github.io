function doInputOutput() {

    //Input: user will enter temperature and wind speed
    let temperature = parseFloat(document.getElementById('temperature').value);
    let windspeed = parseFloat(document.getElementById('windspeed').value);

    //Processing: if input falls under following parameters, then it will jump to the windChill function
    if (temperature < 50 && windspeed > 3) {
        windChill (temperature, windspeed);
    }
    //Processing: if input does not fall under above parameters, it will display this error message
    else {
        document.getElementById('output').innerHTML = "The temperature you entered is too high or the wind speed you entered is too low. Try again with other numbers to get a result."
    }
}

function windChill(temperature, windspeed) {
    
    //Processing: calculate wind chill using temperature and wind speed
    let windchill = 35.74 + 0.6215 * temperature - 35.75 * windspeed**0.16 + 0.4275 * temperature * windspeed**0.16;
    
    //Output: display calculated wind chill factor in fahrenheit
    return document.getElementById('output').innerHTML = parseInt(windchill) + " Degrees Fahrenheit";
}