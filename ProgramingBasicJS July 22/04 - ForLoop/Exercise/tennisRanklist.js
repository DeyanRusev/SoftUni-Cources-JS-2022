function tennisRanklist(input) {

    let numberOfTournirs = Number(input[0]);
    let startingPoints = Number(input[1]);
    
    let tournirsPoints = 0;
    let tournirsWon = 0

    for (i = 2; i <= numberOfTournirs + 1; i++) {

        

        switch ((input[i])) {
            case "W":
                tournirsPoints += 2000; ;
                tournirsWon +=1; break;
            case "F":
                tournirsPoints += 1200; break;
            case "SF":
                tournirsPoints += 720; break;
        }

        
    } 
        let averagePoints = tournirsPoints / numberOfTournirs;
        let percentWon = tournirsWon / numberOfTournirs * 100;    

        console.log(`Final points: ${(tournirsPoints + startingPoints)}`);
        console.log(`Average points: ${Math.floor(averagePoints)}`);
        console.log(`${(percentWon).toFixed(2)}%`);

        

}

tennisRanklist(["4",

"750",

"SF",

"W",

"SF",

"W"])