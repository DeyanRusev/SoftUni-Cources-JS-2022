function trekkingMania(input) {

    let numberOfGroups = Number(input[0]);
    let climbers = 0;
    
    let climbersInGroupMusala = 0;
    let climbersInGroupMonblan = 0;
    let climbersInGroupKiliman  = 0;
    let climbersInGroupK2 = 0;
    let climbersInGroupEverest = 0;

    // let percentClimbingMusala = 0;
    // let percentClimbingMonblan = 0;
    // let percentClimbingKiliman = 0;
    // let percentClimbingK2  = 0;
    // let percentClimbingEverest = 0;


    
    for (i = 1; i <= numberOfGroups; i++) {
        
        climbers +=  Number(input[i]);
        
        

        if (Number(input[i]) <= 5) {

            climbersInGroupMusala += Number(input[i]);
        } 
        else if (Number(input[i]) <= 12) {

             climbersInGroupMonblan += Number(input[i]);
        } 
        else if (Number(input[i]) <= 25) {
            
            climbersInGroupKiliman += Number(input[i]);
        } 
        else if (Number(input[i]) <= 40) {
            
            climbersInGroupK2 += Number(input[i]);
        } 
        else {
            climbersInGroupEverest += Number(input[i]);

        }

    }   

         percentClimbingMusala = climbersInGroupMusala / climbers * 100;
         percentClimbingMonblan = climbersInGroupMonblan / climbers * 100;
         percentClimbingKiliman= climbersInGroupKiliman / climbers * 100;
         percentClimbingK2 = climbersInGroupK2 / climbers *100;
         percentClimbingEverest = climbersInGroupEverest / climbers * 100;

        
    
    console.log(`${(percentClimbingMusala).toFixed(2)}%`);
    console.log(`${(percentClimbingMonblan).toFixed(2)}%`);
    console.log(`${(percentClimbingKiliman).toFixed(2)}%`);
    console.log(`${(percentClimbingK2).toFixed(2)}%`);
    console.log(`${(percentClimbingEverest).toFixed(2)}%`);
    
} 





trekkingMania(["5",

"25",

"41",

"31",

"250",

"6"])

