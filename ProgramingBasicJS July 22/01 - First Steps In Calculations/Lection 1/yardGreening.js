function yardGreening(input) {
    let squareAreaRate = 7.61;
    let squareMeters = Number(input[0]);
    let greeningPrice = squareAreaRate * squareMeters;
    let discountPrice = greeningPrice * 0.18;
    let finalPrice = greeningPrice - discountPrice;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discountPrice} lv.`); 
    
}
yardGreening(['550']);