function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    if(budget <=100) {
        place = "Bulgaria";
        
        switch(season){
            case "summer":
                accomodation = "Camp";
                budgetSpend = budget * 0.3; break;
            case "winter":
                accomodation = "Hotel"; 
                budgetSpend = budget * 0.7; break;
        }
    } else if(budget <= 1000) {
        place = "Balkans";

        switch(season) {
            case "summer":
                accomodation = "Camp";
                budgetSpend = budget * 0.4; break;
            case "winter":
                accomodation = "Hotel"; 
                budgetSpend = budget * 0.8; break;
        }
    } else {
        place = "Europe";
        budgetSpend = budget * 0.9;
        accomodation = "Hotel";
    }

    console.log(`Somewhere in ${place}`);
    console.log(`${accomodation} - ${budgetSpend.toFixed(2)}`);

}

journey(["50", "summer"])
// journey(["75", "winter"])
// journey(["312", "summer"])
// journey(["678.53", "winter"])
// journey(["1500", "summer"])