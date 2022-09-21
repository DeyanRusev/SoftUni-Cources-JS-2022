function petShop(input) {
    let dogFoodCosts = Number(input[0]) * 2.5;
    let catFoodCosts = Number(input[1]) * 4;
    let costs = dogFoodCosts + catFoodCosts;
    console.log(`${costs} lv.`);
}
petShop([3, 3]);