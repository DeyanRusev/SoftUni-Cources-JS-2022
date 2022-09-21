function godzillaVsKong(input) {

    let budget = Number(input[0]);
    let statistsNumber = Number(input[1]);
    let singleClothPrice = Number(input[2]);
    let decorAmount = budget * 0.1;
    let clothAmount = 0;

    if (statistsNumber > 150) {
        clothAmount = (statistsNumber * singleClothPrice) - (0.1 * statistsNumber * singleClothPrice)  
    } else { clothAmount = statistsNumber * singleClothPrice}

    if(budget < (decorAmount + clothAmount)) {
        console.log('Not enough money!')
        console.log(`Wingard needs ${((decorAmount+clothAmount) - (budget)).toFixed(2)} leva more.`)
    } else {console.log('Action!');
            console.log(`Wingard starts filming with ${((budget) - (decorAmount + clothAmount)).toFixed(2)} leva left.`)
}

}

godzillaVsKong(["20000", "120", "55.5"])
//godzillaVsKong(["15437.62", "186", "57.99"])
//godzillaVsKong(["9587.88", "222", "55.68"])