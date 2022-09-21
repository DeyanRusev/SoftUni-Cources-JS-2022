function tradeCommissions(input) {

    let town = input[0];
    let quantity = Number(input[1]);
    let commission = 0;

    switch(town) {
        case "Sofia": 
            if(quantity >= 0 && quantity <= 500) {
                commission = quantity * 0.05;                 
            } else if(quantity >500 && quantity <= 1000) {
                commission = quantity * 0.07;
            } else if(quantity > 1000 && quantity <= 10000) {
                commission = quantity * 0.08;
            } else if( quantity > 10000) {
                commission = quantity * 0.12;
            } else { 
                console.log('error'); break;
            } 
            console.log(commission.toFixed(2)); break;
        case "Varna": 
        if(quantity >= 0 && quantity <= 500) {
            commission = quantity * 0.045;                 
        } else if(quantity >500 && quantity <= 1000) {
            commission = quantity * 0.075;
        } else if(quantity > 1000 && quantity <= 10000) {
            commission = quantity * 0.1;
        } else if( quantity > 10000) {
            commission = quantity * 0.13;
        } else { 
            console.log('error'); break;
        }
            console.log(commission.toFixed(2)); break;
        case "Plovdiv":
            if(quantity >= 0 && quantity <= 500) {
                commission = quantity * 0.055;                 
            } else if(quantity >500 && quantity <= 1000) {
                commission = quantity * 0.08;
            } else if(quantity > 1000 && quantity <= 10000) {
                commission = quantity * 0.12;
            } else if( quantity > 10000) {
                commission = quantity * 0.145;
            } else { 
                console.log('error'); break;
            }
            console.log(commission.toFixed(2)); break;
        default:
            console.log('error'); break;
                  
    }
    
}

tradeCommissions(["Plovdiv", "499.99"])