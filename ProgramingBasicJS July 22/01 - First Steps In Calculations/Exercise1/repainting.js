function repainting(input) {
    let folliAnountNeeded = Number(input[0]);
    let paintAmountNeeded = Number(input[1]);
    let diluentAmountNeede = Number(input[2]);
    let workingHours = Number(input[3]);
    let foliCosts = folliAnountNeeded * 1.5;
    let paintCosts = paintAmountNeeded * 14.5;
    let diluentCosts = diluentAmountNeede * 5;
    let backupMaterialAmount = (0.1 * paintAmountNeeded * 14.5) + (2 * 1.5) + 0.4; //10% more paint cost  + 2sq.m additional folli + bags
    let totalCosts = foliCosts + paintCosts + diluentCosts + backupMaterialAmount;
    let workersSalarysToral = 0.3 * totalCosts * workingHours;

    console.log(workersSalarysToral + totalCosts); 
 
}

repainting(["10 ", "11 " , "4 " , "8 "]);