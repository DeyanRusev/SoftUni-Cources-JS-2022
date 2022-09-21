function summerOutfit(input) {

    let degrees = Number(input[0]);
    let dayPart = input[1];

    if (degrees >= 10 && degrees <= 18) {

        switch(dayPart) {
            case "Morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers"; break;
            case "Afternoon":
                outfit = "Shirt";
                shoes  = "Moccasins"; break;
            default:
                outfit = "Shirt";
                shoes  = "Moccasins"; break;
            };

    } else if(degrees <= 24) {

        switch(dayPart) {
            case "Morning":
                outfit = "Shirt";
                shoes = "Moccasins"; break;
            case "Afternoon":
                outfit = "T-Shirt";
                shoes  = "Sandals"; break;
            default:
                outfit = "Shirt";
                shoes  = "Moccasins"; break;
            };
    } else { 
        
        switch(dayPart) {

            case "Morning":
                outfit = "T-Shirt";
                shoes = "Sandals"; break;
            case "Afternoon":
                outfit = "Swim Suit";
                shoes  = "Barefoot"; break;
            default:
                outfit = "Shirt";
                shoes  = "Moccasins"; break;
        };


    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)

}

//It's {градуси} degrees, get your {облекло} and {обувки}.

// summerOutfit(["16", "Morning"])
summerOutfit(["22",  "Afternoon"])
// summerOutfit(["28", "Evening"])