function foodDelievy(input) {

    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegeterianMenu = Number(input[2]);
    let totalOrderAmount = (chikenMenu * 10.35) + (fishMenu * 12.4) + (vegeterianMenu * 8.15);
    let decertCost = 0.2 * totalOrderAmount; 
    console.log(totalOrderAmount + decertCost + 2.5);
}

foodDelievy(["2 ", "4 ", "3 "]);