function suppliesForScool(input) {
    let pencilePacksPrice = Number(input[0] * 5.80);
    let markerPacksPrice = Number(input[1] * 7.20);
    let boardCleanerPrice = Number(input[2] * 1.20);
    let discountAmountValue = Number(input[3] / 100);
    let totalAmount = pencilePacksPrice + markerPacksPrice + boardCleanerPrice;
    console.log(totalAmount - (totalAmount * discountAmountValue) );
}

suppliesForScool([" 2 ", " 3 ", " 4 ", " 25 "]);







