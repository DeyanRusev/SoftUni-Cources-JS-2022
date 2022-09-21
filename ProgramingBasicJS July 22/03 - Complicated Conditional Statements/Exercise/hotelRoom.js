function hotelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);

    if(month === "May" || month === "October") {
        
        if(nights <= 7) {
            studioRate = nights * 50;
            apartmentRate = nights * 65;
        } else if(nights <= 14) {
            studioRate = (nights * 50) * 0.95;
            apartmentRate = nights * 65;
        } else {
            studioRate = (nights * 50) * 0.7;
            apartmentRate = (nights * 65) * 0.9;
        }
    } else if(month === "June" || month === "September") {

        if(nights <= 14) {
            studioRate = (nights * 75.20);
            apartmentRate = (nights * 68.70);
        } else {
            studioRate = (nights * 75.20) * 0.8;
            apartmentRate = (nights * 68.70) * 0.9;
        }
    } else {
        studioRate = nights * 76;

        if(nights <= 14) {
            apartmentRate = nights * 77;
        } else {
            apartmentRate = (nights * 77) * 0.9;
        }
    
    }
    console.log(`Apartment: ${apartmentRate.toFixed(2)} lv.`);
    console.log(`Studio: ${studioRate.toFixed(2)} lv.`);
}

// hotelRoom(["May", "15"])
// hotelRoom(["June", "14"])
hotelRoom(["August", "20"])