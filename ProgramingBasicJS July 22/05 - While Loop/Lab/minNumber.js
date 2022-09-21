function minNumber(input) {

    let index = 0;
    let command = input[index];

    let minNumber = Number.MAX_SAFE_INTEGER;

    while (command !== 'Stop') {
        
        let num = Number(input[index]);

        if (num < minNumber) {
            minNumber = num
        }

        command = input[index];
        index++;
    }

    console.log(minNumber);
}

minNumber(["45", "-20", "7", "99", "Stop"])