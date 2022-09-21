function solve(input) {

    let speed = Number(input[0]);
    let lettersPerHun = Number(input[1]);

    let totalDistance = 2 * 384400;

    let fuelNeeded = (totalDistance / 100) * lettersPerHun;

    let travelTime = totalDistance / speed;
    let totalTime = travelTime + 3;

    console.log(Math.ceil(totalTime));
    console.log(fuelNeeded);


}

solve(["5000",
"7"])