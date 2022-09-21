function submitASolution(input) {

    let firstPlayerTime = Number(input[0]);
    let secondPlayerTime = Number(input[1]);
    let thirdPlayedTime = Number(input[2]);
    let totalTime = firstPlayerTime + secondPlayerTime + thirdPlayedTime;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;

    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`)
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

submitASolution(["14", "12", "10"]);