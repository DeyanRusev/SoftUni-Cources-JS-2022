function exam(input) {

    let students = Number(input[0]);

    let group1 = 0;
    let group2 = 0;
    let group3 = 0;
    let group4 = 0;

    let sumOfScores = 0;

    for (let score = 1; score <= students; score++) {

        let curentScore = Number(input[score]);

        sumOfScores += curentScore;
        
        if (curentScore >= 5) {
            group1++;
        } else if (curentScore >= 4) {
            group2++;
        } else if (curentScore >= 3) {
            group3++;
        } else if (curentScore < 3) {
            group4++;
        }
    }    

    let group1StudentsPercent = (group1 / students * 100).toFixed(2);
    let group2StudentPercent = (group2 / students * 100).toFixed(2);
    let group3StudentPercent = (group3 / students * 100).toFixed(2);
    let group4StudentPercent = (group4 / students * 100).toFixed(2);
    let averageRate = (sumOfScores / students).toFixed(2);

    console.log(`Top students: ${group1StudentsPercent}%`);
    console.log(`Between 4.00 and 4.99: ${group2StudentPercent}%`);
    console.log(`Between 3.00 and 3.99: ${group3StudentPercent}%`);
    console.log(`Fail: ${group4StudentPercent}%`);
    console.log(`Average: ${averageRate}`);

}

exam([
"6",
"2",
"3",
"4",
"5",
"6",
"2.2"
])