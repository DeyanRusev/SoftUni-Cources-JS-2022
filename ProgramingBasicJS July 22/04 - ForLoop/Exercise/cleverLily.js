function cleverLily(input) {

    let age = Number(input[0]);
    let washingMashinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let spareMoney = 0;
    let evenYears = 0;
    let oodYears = 0;

    let presentMoney = 0

    for (let i = 1; i <= age; i++) {

        if ( i % 2 === 0) {
            evenYears += 1;
            
        } else {
            oodYears  += 1;
            
        }
    };

    for (let b = 1; b <= evenYears; b++) {
        presentMoney += ((b * 10) -1)
    }

    
    toyMoney = oodYears * toyPrice;

    spareMoney = toyMoney + presentMoney;

    

    if(spareMoney >= washingMashinePrice) {

        console.log(`Yes! ${(spareMoney - washingMashinePrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMashinePrice - spareMoney).toFixed(2)}`)
    }
}

cleverLily(["21",

"1570.98",

"3"])