function oscars(input) {

    let actorName = input[0];
    let accademyPoints = Number(input[1]);
    let judgesCount = Number(input[2]);

    let totalPoints = accademyPoints;


    for (let i = 3; i < input.length; i += 2) {

        let judgeName = input[i];
        let pointsGiven = Number(input[i +1]);

        let totalPointsFromJudge = (judgeName.length * pointsGiven) / 2;
        totalPoints += totalPointsFromJudge;

        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(totalPoints).toFixed(1)}!`);
            return;
        }
    }

    console.log(`Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(1)} more!`)
}

oscars([
"Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"]) 