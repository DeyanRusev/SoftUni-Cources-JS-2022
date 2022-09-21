function skiTrip(input) {

    let days = Number((input[0] - 1));
    let accomodationType = input[1];
    let rating = input[2];

    if(days < 10) {

        switch(accomodationType) {
            case "apartment":
                price = (days * 25) * 0.7; break;
                    
            case "president apartment":
                price = (days * 35) * 0.9; break;
            default:
                price = days * 18; break;
                    
        }
    } else if(days <= 15) {

        switch(accomodationType) {
            case "apartment":
                price = (days * 25) * 0.65; break;
            case "president apartment":
                price = (days * 35) * 0.85; break;
            default:
                price = days * 18; break;
               
         } 
    } else {

        switch(accomodationType) {
            case "apartment":
                price = (days * 25) * 0.5; break;
            case "president apartment":
                price = (days * 35) * 0.8; break;
            default:
                price = days * 18; break;
        }
    };

    switch(rating) {
        case "positive":
           console.log((price * 1.25).toFixed(2)); break;
        default:
            console.log((price * 0.9).toFixed(2)); break;
    }
    

}

// skiTrip(["14", "apartment", "positive"])
// skiTrip(["30", "president apartment", "negative"])
// skiTrip(["12", "room for one person", "positive"])
skiTrip(["2", "apartment", "positive"])