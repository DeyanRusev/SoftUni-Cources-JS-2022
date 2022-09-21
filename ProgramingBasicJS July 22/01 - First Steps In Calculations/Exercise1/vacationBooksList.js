function vacationBooksList(input) {
    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let hoursPerDay = numberOfPages / pagesPerHour / days;
    console.log(hoursPerDay);
}

vacationBooksList(["212 ", "20 ", "2 "]);