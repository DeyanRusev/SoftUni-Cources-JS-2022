function cinemaTickets (input) {

    let index = 0;

    let movie = input[index];
    index++;

    
    let studentTicketCount = 0;
    let standardTicketCount = 0;
    let kindsTicketCount = 0;
    
    while (movie !== "Finish") {
        
        let freeSpaces = Number(input[index]);
        index++;
        
        let ticketType = input[index];
        index++;
        
        let placesTaken = 0;

        while(ticketType !== "End") {

            placesTaken++;
            
            if (ticketType === 'student') {

                studentTicketCount++;

            } else if (ticketType === 'standard') {

                standardTicketCount++;

            } else {

                kindsTicketCount++;
            }
            
            if (placesTaken === freeSpaces) {
                break;
            }

            ticketType = input[index];
            index++;

        }

        let percentTaken = (placesTaken / freeSpaces * 100).toFixed(2);
        
        console.log(`${movie} - ${percentTaken}% full.`);
    
        movie = input[index];
        index++;
    }
    let totalTicketCount = studentTicketCount + standardTicketCount + kindsTicketCount;

    console.log(`Total tickets: ${totalTicketCount}`)
    console.log(`${(studentTicketCount / totalTicketCount * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTicketCount / totalTicketCount * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kindsTicketCount / totalTicketCount * 100).toFixed(2)}% kids tickets.`);


}

cinemaTickets([
    "The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"
])