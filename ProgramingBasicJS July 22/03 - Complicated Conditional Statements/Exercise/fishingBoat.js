function fishingBoat(input) {
    
    let companyBudget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);
    
    if(fishermans <= 6) {

        switch(season) {
            case "Spring":
                boatPrice = 3000 * 0.9; break;
            case "Winter":
                boatPrice = 2600 * 0.9; break;
            default:
                boatPrice = 4200 * 0.9; break; 
        }
    } else if(fishermans <= 11) {

        switch(season) {
            case "Spring":
                boatPrice = 3000 * 0.85; break;
            case "Winter":
                boatPrice = 2600 * 0.85; break;
            default:
                boatPrice = 4200 * 0.85; break;
        }
    } else {

        switch(season){
            case "Spring":
                boatPrice = 3000 * 0.75; break;
            case "Winter":
                boatPrice = 2600 * 0.75; break;
            default:
                boatPrice = 4200 * 0.75; breark;
        }
    }
    if(fishermans % 2 === 0 && season != "Autumn") {
        boatPrice = boatPrice * 0.95
    }
    if (boatPrice <= companyBudget) {

        console.log(`Yes! You have ${(companyBudget - boatPrice).toFixed(2)} leva left.`);
        
    } else {
        console.log(`Not enough money! You need ${(boatPrice - companyBudget).toFixed(2)} leva.`)
    }
}

fishingBoat(["3000", "Summer", "11"])
// fishingBoat(["3600", "Autumn", "6"])
// fishingBoat(["2000", "Winter", "13"])