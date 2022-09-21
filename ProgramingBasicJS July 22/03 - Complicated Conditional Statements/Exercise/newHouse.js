function newHouse(input) {

    let flowers = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0

    
    switch(flowers) {

        case "Roses":
            if(numberOfFlowers > 80) {
                price = (numberOfFlowers * 5) * 0.9;
            } else {
                price = numberOfFlowers * 5;
            }; break;
        case "Dahlias":
            if(numberOfFlowers > 90) {
                price = (numberOfFlowers * 3.8) * 0.85;
            } else {
                price = (numberOfFlowers * 3.8);
            }; break;
        case "Tulips":
            if(numberOfFlowers > 80) {
                price = (numberOfFlowers * 2.8) * 0.85;
            } else {
                price = (numberOfFlowers * 2.8);
            }; break;
        case "Narcissus":
            if(numberOfFlowers >= 120) {
                price = numberOfFlowers * 3;
            } else {
                price = numberOfFlowers * (3 * 1.15);
            }; break;
        default:
            if(numberOfFlowers >= 80) {
                price = numberOfFlowers * 2.5;
            } else {
                price = numberOfFlowers * (2.5 * 1.2);
            }; break;


    };
    if(budget >= price) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flowers} and ${(budget - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
    }
    
}

newHouse(["Gladiolus", "64", "160"])
// newHouse(["Tulips", "81", "260"]) 
// newHouse(["Narcissus", "119", "360"])



// 
// 