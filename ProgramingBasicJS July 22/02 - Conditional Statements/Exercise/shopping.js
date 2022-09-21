function shopping(input) {

    let petersBudget = Number(input[0]);
    let numberOfVcards = Number(input[1]);
    let numberOfProcessors = Number(input[2]);
    let numberOfRam = Number(input[3]);

    let vcardsPrice = numberOfVcards * 250;
    let processorPrice = (vcardsPrice * 0.35) * numberOfProcessors;
    let ramPrice = (vcardsPrice * 0.1) * numberOfRam;
    let totalPrice = vcardsPrice + processorPrice + ramPrice;

    if(numberOfVcards > numberOfProcessors) {
        totalPrice = totalPrice - (totalPrice * 0.15)

    }
    if(petersBudget >= totalPrice) {
        console.log(`You have ${(petersBudget - totalPrice).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalPrice - petersBudget).toFixed(2)} leva more!`)
    }
}

shopping(["920.45", "3", "1", "1"])
//shopping(["900", "2", "1", "3"])