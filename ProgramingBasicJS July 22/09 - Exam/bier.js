function solve(input) {

    let name = input[0];
    let budget = Number(input[1]);
    let numberOfBiers = Number(input[2]);
    let numberOfChips = Number(input[3]);
    let bierPrice = 1.20;

    let bierTotal = numberOfBiers * bierPrice;
    let chipsPrice = bierTotal * 0.45;

    let totalChipSpend = Math.ceil(numberOfChips * chipsPrice);

    let totalSpend = totalChipSpend + bierTotal;

    if (budget >= totalSpend) {
        console.log(`${name} bought a snack and has ${(budget - totalSpend).toFixed(2)} leva left.`);
    
    } else {

        console.log(`${name} needs ${(totalSpend - budget).toFixed(2)} more leva!`)
    }


}

solve (["Valentin",
"5",
"2",
"4"])