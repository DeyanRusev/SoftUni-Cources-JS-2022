function rounding(number, precision) {
    let num = Number(number);
    let prec = Number(precision);
    if (prec > 15) {
        prec = 15;
    }
    console.log(Number.parseFloat(number.toFixed(prec)));

}
rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);