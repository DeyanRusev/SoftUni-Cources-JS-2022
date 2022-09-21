function vacantion(input) {
    
    let index = 0;

    let moneyNeeded = Number(input[index]);
    index++;

    let myMoney = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let totalDays = 0;
    let daysSpending = 0;
    let isSpending = true;

    while (myMoney < moneyNeeded) {

        if (command === "spend") {
            
            command = Number(input[index]);
            myMoney -= command;
            totalDays++;
            daysSpending++;
                
            if (myMoney < 0 ) {
                myMoney = 0;
                }; 
            if (daysSpending === 5) {
                console.log("You can't save the money.");
                console.log(`${totalDays}`);
                isSpending = false; 
                break;
                }; 
        } else if (command === "save") {
            
            command = Number(input[index]);
            myMoney += command;
            totalDays++;
            if (daysSpending !== 0) {
                daysSpending = 0;
            } 

        }
        command = input[index];
        index++;
    }

    if (isSpending) {

        console.log(`You saved the money for ${totalDays} days.`);
    }
}

vacantion
// ([
// "250",
// "150",
// "spend",
// "50",
// "spend",
// "50",
// "save",
// "100",
// "save",
// "100"
// ])
// ([
// "110",
// "60",
// "spend",
// "10",
// "spend",
// "10",
// "spend",
// "10",
// "spend",
// "10",
// "spend", 
// "10"
// ])
([
"2000",
"1000",
"spend",
"1200",
"save",
"2000"
])