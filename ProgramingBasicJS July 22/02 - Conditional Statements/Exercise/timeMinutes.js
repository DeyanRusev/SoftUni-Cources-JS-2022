function timeMinutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let newMinutes = minutes + 15;
    let newHour = hour + 1;
    if (hour === 23) {
        newHour = 0;
    }
    if(newMinutes > 60) {
        minutes = (newMinutes - 60);
        hour = newHour;
    } else if (newMinutes === 60) {
        minutes = (00);
        hour = newHour;
    } else { minutes = minutes + 15;}

    if (minutes < 9 ) {

        console.log(`${hour}:0${minutes}`);
    } else {
        console.log(`${hour}:${minutes}`);
    }

}

    
       

timeMinutes(["1", "46"])