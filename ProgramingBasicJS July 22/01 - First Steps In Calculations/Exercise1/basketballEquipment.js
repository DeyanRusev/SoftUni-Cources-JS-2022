function basketballEquipment(input) {

    let baskedballTrainingCosts = Number(input[0]);
    let sneakersCosts = baskedballTrainingCosts - (0.4 * baskedballTrainingCosts);
    let sportSuiteCosts = sneakersCosts - (0.2 * sneakersCosts);
    let ballCosts = sportSuiteCosts / 4;
    let accessoariesCost = ballCosts / 5;
    
    console.log(baskedballTrainingCosts + sneakersCosts + sportSuiteCosts + ballCosts + accessoariesCost);
};

basketballEquipment(["365 "])