function footwear() {

    //Input:  Select weather type
    let weather = document.getElementById("weather").value;

    //Processing: Determine the correct output based off of weather selection
    let shoes;
    if (weather == "Hot") {
        shoes = "Sandals"
    } else if (weather == "Snow") {
        shoes = "Boots"
    } else if (weather == "Rain") {
        shoes = "Galoshes"
    } else if (weather == "") {
        shoes = "Shoes"
    }
    let output = shoes;

    //Output: Display shoe type
    document.getElementById("output").innerHTML = shoes;
}