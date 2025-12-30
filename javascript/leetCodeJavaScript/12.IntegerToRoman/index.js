var intToRoman = function(num) {
    var myMapRoman = new Map();
    myMapRoman.set(1, "I");
    myMapRoman.set(2, "II");
    myMapRoman.set(3, "III");
    myMapRoman.set(4, "IV");
    myMapRoman.set(5, "V");
    myMapRoman.set(6, "VI");
    myMapRoman.set(7, "VII");
    myMapRoman.set(8, "VIII");
    myMapRoman.set(9, "IX");
    myMapRoman.set(10, "X");
    myMapRoman.set(20, "XX");
    myMapRoman.set(30, "XXX");
    myMapRoman.set(40, "XL");
    myMapRoman.set(50, "L");
    myMapRoman.set(60, "LX");
    myMapRoman.set(70, "LXX");
    myMapRoman.set(80, "LXXX");
    myMapRoman.set(90, "XC");
    myMapRoman.set(100, "C");
    myMapRoman.set(200, "CC");
    myMapRoman.set(300, "CCC");
    myMapRoman.set(400, "CD");
    myMapRoman.set(500, "D");
    myMapRoman.set(600, "DC");
    myMapRoman.set(700, "DCC");
    myMapRoman.set(800, "DCCC");
    myMapRoman.set(900, "CM");
    myMapRoman.set(1000, "M");
    myMapRoman.set(2000, "MM");
    myMapRoman.set(3000, "MMM");

    var firstNumber = num % 10
    var secondNumber = (num % 100) - firstNumber
    var thirdNumber = (num % 1000) - secondNumber - firstNumber
    var fourthNumber = (num % 10000) -thirdNumber- secondNumber- firstNumber

    console.log(myMapRoman.get("MM"))
    let result = ""
    if(firstNumber){
        result = myMapRoman.get(firstNumber) + result
    }

    if(secondNumber !== 0){
        result = myMapRoman.get(secondNumber) + result
    }

    if(thirdNumber !== 0){
        result = myMapRoman.get(thirdNumber) + result
    }

    if(fourthNumber !== 0){
        result = myMapRoman.get(fourthNumber) + result
    }
    
    return result;
};

console.log(intToRoman(37));