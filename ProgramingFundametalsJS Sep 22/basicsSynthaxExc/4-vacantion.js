function vacantion(groupOfPpl, typeOfGroup, dayOfWeek) {
    
    let price = 0;
    let totalPrice = 0;
    let currentGroup = Number(groupOfPpl);

    switch (typeOfGroup) {
        case 'Students':
            switch (dayOfWeek) {
                case 'Friday':
                    price = 8.45
                    break;
                case 'Saturday':
                    price = 9.80;
                    break;
                case 'Sunday':
                    price = 10.46;
                    break;
                };
            if (currentGroup >= 30) {
                totalPrice = currentGroup * price * 0.85;
            } else {
                totalPrice = currentGroup * price
            };
            break;
        case 'Business':    
            switch (dayOfWeek) {
                case 'Friday':
                    price = 10.90;
                    break;
                case 'Saturday':
                    price = 15.60;
                    break;
                case 'Sunday':
                    price = 16;
                    break;
                };
            if (currentGroup >= 100) {
                totalPrice = (currentGroup - 10) * price    
            } else { 
                totalPrice = currentGroup * price 
            };
            break;
        case 'Regular':
            switch (dayOfWeek) {
                case 'Friday':
                    price = 15;
                    break;
                case 'Saturday':
                    price = 20;
                    break;
                case 'Sunday':
                    price = 22.5;
                    break;
                };
            if (currentGroup >= 10 && currentGroup <= 20) {
                totalPrice = currentGroup * price * 0.95;
            } else {
                totalPrice = currentGroup * price;
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacantion(40, "Regular", "Saturday")