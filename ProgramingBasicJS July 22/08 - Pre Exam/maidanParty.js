function maidanParty(input) {

    let partyPrice = Number(input[0]);
    let loveMsg = Number(input[1]);
    let roses = Number(input[2]);
    let keyKeepers = Number(input[3]);
    let funnyPics = Number(input[4]);
    let luckySurp = Number(input[5]);

    let totalSalings = loveMsg + roses + keyKeepers + funnyPics + luckySurp;

    let loveMsgSum = loveMsg * 0.60;
    let rosesSum = roses * 7.20;
    let keyKeepersSum = keyKeepers * 3.60;
    let funnyPicsSum = funnyPics * 18.20;
    let luckySurpSum = luckySurp * 22;

    let totalMoney = loveMsgSum + rosesSum + keyKeepersSum + funnyPicsSum + luckySurpSum;

    if (totalSalings >= 25) {

        totalMoney = totalMoney * 0.65;
    }

    let totalMoneyFinal = totalMoney * 0.90

    if (totalMoneyFinal >= partyPrice) {

        console.log(`Yes! ${(totalMoneyFinal - partyPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(partyPrice - totalMoneyFinal).toFixed(2)} lv needed.`)
    }  
}

maidanParty(["320",
"8",
"2",
"5",
"5",
"1"])

