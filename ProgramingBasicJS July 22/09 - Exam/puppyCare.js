function puppyCare(input) {

    let index = 0;

    let foodBoughtInKg = Number(input[index]);
    index++;

    let comand = input[index];
    index++

    let foodBoughtInGr = foodBoughtInKg * 1000;

    let foodEaten = 0;

    while (comand !== 'Adopted') {

        currentFood = Number(comand);

        foodEaten += currentFood;

        comand = input[index];
        index++

    }
    if (foodEaten <= foodBoughtInGr) {
        
        console.log(`Food is enough! Leftovers: ${foodBoughtInGr - foodEaten} grams.`);
    } else {
        console.log(`Food is not enough. You need ${foodEaten - foodBoughtInGr} grams more.`)
    }
}

puppyCare(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])