function graduation(input) {

    let index = 0
    
    let student = input[0];
    index++;
    
    let grades = input[index];
    index++;
    
    let sumOfGrades = 0;
    let penalty = 0;

    while(grades <= 12 ) {

        if (grades <= 4) {
            penalty++;
            continue;
        }
        sumOfGrades += grades;

        grades = input[index];
        index++;
        
        if (penalty >= 2){

            console.log(`${student} has been excluded at ${input[index]} grade`);
            break;
        }


    }

    console.log(`${student} graduated. Average grade: ${(sumOfGrades / 12).toFixed(2)}`)
}

graduation(["Gosho",
"5",
"4",
"6",
"5.43", 
"5.5", 
"6", 
"5.55", 
"5", 
"6", 
"6", 
"5.43", 
"5"
])