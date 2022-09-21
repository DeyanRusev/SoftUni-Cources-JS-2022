function bonusScore(input) {

    let number = Number(input[0]);
    let bonus = 0
    if (number <= 100) {
        bonus = 5;
    } else if(number > 100 && number <1000) {
        bonus = number * 0.2;
    } else if(number > 1000) {
        bonus = number * 0.1;
    }

    let totalPoints = number + bonus
    let addBonus = 0
    if ((number % 2) == 0) {
        addBonus = 1;
    } else if((number % 5 == 0)) {
        addBonus = 2
    }
    console.log(bonus + addBonus);
    console.log(number + bonus +addBonus);
}

bonusScore(["15875"])