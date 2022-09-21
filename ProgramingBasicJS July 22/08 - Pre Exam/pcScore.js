function pcScore(input) {

    let processorPrice = Number(input[0]);
    let vcPrice = Number(input[1]);
    let ramPrice = Number(input[2]);
    let numberOfRam = Number(input[3]);
    let disountPercent = Number(input[4]);

    let processorPriceInLeva = processorPrice * 1.57;
    let vcPriceInLeva = vcPrice * 1.57;
    let ramPriceInLeva = ramPrice * 1.57;

    let processorPriceWithDiscout = processorPriceInLeva - (processorPriceInLeva * disountPercent);
    let vcPriceInLevaWithDiscount =  vcPriceInLeva - (vcPriceInLeva * disountPercent);
    let ramTotalPrice = ramPriceInLeva * numberOfRam;

    let moneyNeeded = (processorPriceWithDiscout + vcPriceInLevaWithDiscount + ramTotalPrice);


    console.log(`Money needed - ${(moneyNeeded).toFixed(2)} leva.`)
}

pcScore(["200",
"100",
"80",
"1",
"0.01"])



