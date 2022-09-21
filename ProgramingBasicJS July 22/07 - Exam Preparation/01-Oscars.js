function oscars(input) {

    let hallRent = Number(input[0]);
    let statuePrice = hallRent * 0.7;
    let catering = statuePrice * 0.85;
    let sound = catering * 0.5;

    let expences =  hallRent + statuePrice + catering + sound;

    console.log(expences.toFixed(2));


}

oscars(["3500"])