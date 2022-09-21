function smallShop(input) {

    let price = 0
    let product = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    
    if(town == "Sofia") {
        if(product == "coffee") {
            price = 0.5 * quantity
        } else if(product == "water") {
            price = 0.8 * quantity;
        } else if(product == 'beer') {
            price = 1.2 * quantity; 
        } else if(product == 'sweets') {
            price = 1.45 * quantity;
        } else {price = 1.6 * quantity}
    } else if(town == "Plovdiv") {
        if(product == "coffee") {
            price = 0.4 * quantity
        } else if(product == "water") {
            price = 0.7 * quantity;
        } else if(product == 'beer') {
            price = 1.15 * quantity; 
        } else if(product == 'sweets') {
            price = 1.30 * quantity;
        } else {price = 1.50 * quantity}
    } else {
        if(product == "coffee") {
            price = 0.45 * quantity
        } else if(product == "water") {
            price = 0.7 * quantity;
        } else if(product == 'beer') {
            price = 1.1 * quantity; 
        } else if(product == 'sweets') {
            price = 1.35 * quantity;
        } else {price = 1.55 * quantity}
    }
    console.log(price);

}

//smallShop(["water", "Plovdiv", "2"])
smallShop(["sweets", "Sofia", "2.23"])