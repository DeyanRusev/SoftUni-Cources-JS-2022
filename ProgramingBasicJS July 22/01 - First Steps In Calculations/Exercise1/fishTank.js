function fishTank(input) {

    let tankLenght = Number(input[0]);
    let tankWidth = Number (input[1]);
    let tankHigh = Number(input[2]);
    let takenAmountPercentage = Number(input[3]);
    let tankVolume =  (tankLenght / 10) * (tankWidth / 10) * (tankHigh / 10); //Volume in lieters
    
    console.log(tankVolume - (tankVolume * takenAmountPercentage / 100));
 
};

fishTank(["85 ", "75 ", "47 ", "17 "]);