function speedClimb(input) {

    let record = Number(input[0]);
    let distance = Number(input[1]);
    let speed = Number(input[2]);

    let timeNeeded = distance * speed;
    let delay = Math.floor(distance / 50) * 30;

    totalTimeNeeded = timeNeeded + delay;

    if (totalTimeNeeded >= record) {

        console.log(`No! He was ${(totalTimeNeeded - record).toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes! The new record is ${totalTimeNeeded.toFixed(2)} seconds.`);
    }


}

speedClimb(["1377",
"389",
"3"])