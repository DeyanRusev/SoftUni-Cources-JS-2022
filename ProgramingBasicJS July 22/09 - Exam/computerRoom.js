function computerRoom(input) {
    
    let month = input[0];
    let hoursSpent = Number(input[1]);
    let peopleInGroup = Number(input[2]);
    let dayTime = input[3];

    let price = 0;

    switch(month){

        case "march":
            if(dayTime === 'day'){
                price = 10.50;
            } else {
                price = 8.40;
            }; break;
        case "april":
            if(dayTime === 'day'){
                price = 10.50;
            } else {
                price = 8.40;
            }; break;
        case "may":
            if(dayTime === 'day'){
                price = 10.50;
            } else {
                price = 8.40;
            }; break;
        case "june":
            if(dayTime === 'day'){
                price = 12.60;
            } else {
                price = 10.20;
            }; break;
        case "july":
            if(dayTime === 'day'){
                price = 12.60;
            } else {
                price = 10.20;
            }; break;
        case "august":
            if(dayTime === 'day'){
                price = 12.60;
            } else {
                price = 10.20;
            }; break;
    }

    
    if (peopleInGroup >= 4) {
        price *= 0.90;
    }
    
    if (hoursSpent >= 5){
        price *= 0.5;
    }
    
    let totalPrice = hoursSpent * price * peopleInGroup;
    



    console.log(`Price per person for one hour: ${(price).toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalPrice.toFixed(2)}`);

}

computerRoom(["july",
"5",
"5",
"night"])