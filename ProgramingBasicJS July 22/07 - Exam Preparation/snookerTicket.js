function snookerTicket(input) {

    let stage = input[0];
    let tickeckType = input[1];
    let numberOfTickets = Number(input[2]);
    let picsWithCup = input[3];

    let amount = 0;
    let ticketPrice = 0;

    if (stage === 'Quarter final') {
        
        switch(tickeckType) {

            case "Standard" :
                ticketPrice = 55.50; break;
            case "Premium" :
                ticketPrice = 105.20; break;
            case "VIP" :
                ticketPrice = 118.90; break;
        }

    } else if (stage === 'Semi final') {

        switch(tickeckType) {

            case "Standard" :
                ticketPrice = 75.88; break;
            case "Premium" :
                ticketPrice = 125.22; break;
            case "VIP" :
                ticketPrice = 300.40; break;
        }

    }   else {

        switch(tickeckType) {

            case "Standard" :
                ticketPrice = 110.10; break;
            case "Premium" :
                ticketPrice = 160.66; break;
            case "VIP" :
                ticketPrice = 400; break;
        }
    }

    let totalAmount = ticketPrice * numberOfTickets;


    if (totalAmount > 4000) { 

        totalAmount = 0.75 * totalAmount;
    } 
    else if (totalAmount > 2500) {

        totalAmount = 0.9 * totalAmount;
        if (picsWithCup === 'Y'){
            totalAmount += numberOfTickets  * 40;
        }

    } else {
        if (picsWithCup === 'Y'){
            totalAmount += numberOfTickets  * 40;
        }
        
    }
    
 console.log(totalAmount.toFixed(2));

}

snookerTicket(["Quarter final",
"Standard",
"11",
"N"])