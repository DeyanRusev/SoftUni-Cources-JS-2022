function depositCalculator(input) {
    let depositAmount = Number(input[0]);
    let depostiTerm = Number(input[1]);
    let yearInterestPercent = Number(input[2]);
    let totalAmount = depositAmount + depostiTerm * ((depositAmount * yearInterestPercent / 100) / 12); //сума = депозирана сума + срок на депозита * ((депозирана сума * годишен лихвен процент / 100) / 12)
    console.log(totalAmount);
}


depositCalculator(["200 ", "3 ", "5.7 "]);