function solve(input) {
    
    let index = 0;

    let negativeScores = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let goodGrades = 0;
    let badGrades = 0;
    let sumOfGrades = 0;
    let lastProblem = '';
    let problems = 0;
    

    while (command !== 'Enough') {
        
        lastProblem = command;
        goodGrades = Number(input[index]);
        index++;

        if (goodGrades <= 4) {
            badGrades ++;
        }
        sumOfGrades += goodGrades
        problems++;

        if (badGrades == negativeScores) {
            console.log(`You need a break, ${badGrades} poor grades.`);
            break;
        }
        command = input[index];
        index++;
        
    }
    let averageScore = sumOfGrades / problems;

    if (badGrades !== negativeScores) {
    console.log(`Average score: ${averageScore.toFixed(2)}`);
    console.log(`Number of problems: ${problems}`);
    console.log(`Last problem: ${lastProblem}`);
    }
        


}

examPreparation([
"2",

"Income",

"3",

"Game Info",

"6",

"Best Player",

"4"
])



