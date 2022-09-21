function toyShop(input) {
    
    let excursionPrice = Number(input[0]);
    let puzzels = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let tadyBears = Number(input[3]);
    let minions = Number (input[4]);
    let trucks = Number(input[5]);
    let totalToys = puzzels + talkingDolls + tadyBears + minions + trucks;
    let totalAmount = (puzzels * 2.6) + (talkingDolls * 3) + (tadyBears * 4.1) + (minions * 8.2) + (trucks * 2);
    let discountedAmount = 0
    if(totalToys >= 50) {
        discountedAmount = totalAmount - (totalAmount * 0.25)
    } else {discountedAmount = totalAmount
    }
    let rent = discountedAmount * 0.1;
    let totalIncome = discountedAmount - rent;

    if (excursionPrice <= totalIncome) {
        console.log(`Yes! ${(totalIncome - excursionPrice).toFixed(2)} lv left.`)
    } else { console.log(`Not enough money! ${(excursionPrice - totalIncome).toFixed(2)} lv needed.`)}

}
toyShop(["320", "8", "2", "5", "5", "1"]);
//toyShop(["40.8", "20", "25", "30", "50", "10"]);