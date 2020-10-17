function PoundsToKilograms(){
    //input
    let pounds = parseFloat(document.getElementById ('pounds').Value);

    //processing
        //the conversion factor from pounds to kg is 0.45359237
    let kilograms = pounds*0.45359237;

    //output
    document.getElementById('output').textContent = Kilograms.toFixed(1)+"kg.";
}