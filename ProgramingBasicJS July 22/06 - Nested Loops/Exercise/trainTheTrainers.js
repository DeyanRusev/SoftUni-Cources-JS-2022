function trainTheTrainer(input) {

    let index = 0;

    let juriNum = Number(input[index]);
    index++;

    let presentation = input[index];
    index++;

    let presentationCount = 0;
    let presentationsAverage = 0;

    
    while (presentation !== "Finish") {
        
        presentationCount++;

        let score = Number(input[index]);
        index++;
        
        let scoreCount = 1;
        
        let sumOfScores = 0;
        
        while (scoreCount <= juriNum) {
            
            scoreCount++;
            sumOfScores += score;

            if (scoreCount > juriNum){
                break;
            }
            
            score = Number(input[index]);
            index++;
        }
        let averageScore = sumOfScores / juriNum;
        console.log(`${presentation} - ${averageScore.toFixed(2)}.`);
        
        presentationsAverage += averageScore;

        presentation = input[index];
        index++
       
    }
    console.log(`Student's final assessment is ${((presentationsAverage / presentationCount).toFixed(2))}.`)
}   
trainTheTrainer(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]) 