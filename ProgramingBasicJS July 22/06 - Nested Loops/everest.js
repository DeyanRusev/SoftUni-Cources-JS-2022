function everest(input) {
    
    let index = 0;

    let command = input[index];
    index++;

    let days = 1;

    let totalClimbed = 5364;

    let timeFail = false;

    while (command !== 'END') {

        let metersClimbed = Number(input[index]);
        index++;
        
        totalClimbed += metersClimbed;

        if (command === "Yes") {
            days++; 
        }

        if (days >= 5) {

            timeFail = true;
            break;
            
        } 
        if (totalClimbed >= 8848) {
            console.log(`Goal reached for ${days} days!`);
            break;
        }

        command = input[index];
        index++;
    }

    if(totalClimbed < 8848 || timeFail == true){
        console.log("Failed!");
        console.log(`${totalClimbed}`);
    } 
}

everest(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"])