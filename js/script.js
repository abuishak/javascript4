document.getElementById("convert-temp").addEventListener("click", function(){
    var myArray = new Array();
        myArray [0] = "";
        var s = "Please enter a value in Fahrenheit";
        var input = prompt("Please enter a value in Fahrenheit");
    var fValues =[];
    while(input != 'x' && input != 'x' ) {
        if(isNaN(input)) {
         var m = "<h2>Error!</h2>"
             m +="Error ! Plaese only enter number!\n";
            input = prompt(s,0);
        } else {
            fValues.push(input);
            input = prompt(s,0);
        }
    }
    printCelsius(fValues);

});
document.getElementById("convert-weight").addEventListener("click", function(){
     var myArray = new Array();
        myArray [0] = "";
        var s = "Please enter a value in Pounds";
        var input = prompt("Please enter a value in Pounds");
    var pValues =[];
    while(input != 'x' && input != 'x' ) {
        if(isNaN(input)) {
            var m = "<h2>Error!</h2>"
             m +="Error ! Plaese only enter number!\n";
            input = prompt(s,0);
        } else {
            pValues.push(input);
            input = prompt(s,0);
        }
    }
    printKilos(pValues);
});
document.getElementById("convert-speed").addEventListener("click", function(){
    var myArray = new Array();
        myArray [0] = "";
        var s = "Please enter a value in Miles per Hour";
        var input = prompt("Please enter a value in Miles per Hour");
    var mValues =[];
    while(input != 'x' && input != 'x' ) {
        if(isNaN(input)) {
            var m = "<h2>Error!</h2>"
             m +="Error ! Plaese only enter number!\n";
             input = prompt(s,0);
        } else {
            mValues.push(input);
            input = prompt(s,0);
        }
    }
    printKPH(mValues);
});
function ConvertToCentigrade(degFahren) {
    var degCent = 5 / 9* (degFahren - 32);
    return degCent;
}
function getCelsiusFromFahrenheit(fFahr) {
    var c = 5/ 9* (fFahr -32);
        c = 5/9*(fFahr - 32);
        return c;    
}
function getKilosFromPounds(fPound) {
    var k = parseFloat(fPound);
        k = fPound / 2.2046;
        return k;
}
function getKphFromMph(fMPH) {
    var KPH = parseInt(fMPH);
        KPH = fMPH * 1.609344;
        return KPH;
}
function printCelsius(aFahrenheit) {
    var s = '<h3>Fahrenheit to Celsius Conversion</h3>';
        s += '<ul>';
        for(var i = 0; i <aFahrenheit.length; i++) {
            s +='<li>';
        s += aFahrenheit[i] + 'in Fahrenheit equals';
        s += getCelsiusFromFahrenheit(aFahrenheit[i]);
        s += 'in Celsius';
        s += '</li>';
        }
        s += '</ul>';
        document.getElementById("result").innerHTML = s;
}
function printKilos(aPounds) {
    var s = '<h3>Pounds to Kilos Conversion</h3>';
        s += '<ul>';
        for(var i = 0; i <aPounds.length; i++) {
            s +='<li>';
        s += aPounds[i] + 'in Pounds equals';
        s += getKilosFromPounds(aPounds[i]);
        s += 'in Kilos';
        s += '</li>';
        }
        s +='</ul>';
        document.getElementById("result").innerHTML = s;
}
    
function printKPH(aMPH) {
    var s = '<h3>MPH to KPH Conversion</h3>';
        s += '<ul>';
        for(var i = 0; i <aMPH.length; i++) {
            s +='<li>';
        s += aMPH[i] + 'in MPH equals';
        s += getKphFromMph(aMPH[i]);
        s += 'in KPH';
        s += '</li>';
        }
        s += '</ul>';
        document.getElementById("result").innerHTML = s;
}
    
