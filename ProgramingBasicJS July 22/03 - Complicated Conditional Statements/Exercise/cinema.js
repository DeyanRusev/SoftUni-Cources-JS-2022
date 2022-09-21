function cinema(input) {
    
    let projection = input[0];
    let rows = Number(input[1]);
    let colums = Number(input[2]);
    let income = 0;

    if(projection === 'Premiere') {
        income = rows * colums * 12;
    } else if(projection === 'Normal') {
        income = rows * colums * 7.5;
    } else if(projection === 'Discount') {
        income = rows * colums * 5;
    } 
    console.log(`${income.toFixed(2)} leva`)
}

cinema(["Discount", "12", "30"])