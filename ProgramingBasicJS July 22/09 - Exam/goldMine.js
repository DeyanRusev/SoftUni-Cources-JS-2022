function goldMine(input) {
    
    let index = 0;

    let numberOfLocation = Number(input[index]);
    index++;

    for (let location = 1; location <= numberOfLocation; location++) {

        let dailyAverageExpected = Number(input[index]);
        index++;
        
        let daysDiggingInLocation = Number(input[index]);
        index++;

        let goldDiggedTotal = 0;
        let currentDay = 1;

        while (currentDay <= daysDiggingInLocation) {

            goldDigged = Number(input[index]);
            index++;
            
            goldDiggedTotal += goldDigged;
            
            currentDay++

        }

        let dailyAverageDigged = goldDiggedTotal / daysDiggingInLocation;
        
        if (dailyAverageDigged >= dailyAverageExpected) {

            console.log(`Good job! Average gold per day: ${(dailyAverageDigged).toFixed(2)}.`)
        } else  {
            console.log(`You need ${(dailyAverageExpected - dailyAverageDigged).toFixed(2)} gold.`);
        }

    }

}

goldMine(["1",
"5",
"3",
"10",
"1",
"3"])