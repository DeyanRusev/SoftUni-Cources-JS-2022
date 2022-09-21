function santasHolyday(input) {

    let numberOfDays = Number(input[0]);
    let accomodationType = input[1];
    let rate = input[2];

    let nigts = numberOfDays - 1;

    let moneyForStay = 0

    switch(accomodationType) {
        case "room for one person":
            moneyForStay = nigts * 18; 
            break;
        case "apartment":
            if (numberOfDays < 10){
                moneyForStay = (nigts * 25) * 0.7;
                
           } else if (numberOfDays <= 15) {
                moneyForStay = (nigts * 25) * 0.65
             
           } else {
                moneyForStay = (nigts * 25) * 0.5;
           }; break
        case "president apartment":

            if (numberOfDays < 10) {
                moneyForStay = (nigts * 35) * 0.9;
            } else if (numberOfDays <= 15) {
                moneyForStay = (nigts * 35) * 0.85;
            } else {
                moneyForStay = (nigts * 35) * 0.8;
            } ; break;

        
    }

    if (rate === "positive" ){
        moneyForStay = moneyForStay * 1.25;
    } else {
        moneyForStay = moneyForStay * 0.9
    }
    console.log(moneyForStay.toFixed(2));

}

santasHolyday(["2",
"apartment",
"positive"])