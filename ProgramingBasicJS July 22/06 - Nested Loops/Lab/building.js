function building(input) {


    let florCount = Number(input[0]);
    let roomCount = Number(input[1]);
   
    for (let i = florCount; i > 0; i--) {

        let buffer = '';

        for (let j = 0; j < roomCount; j++) {
            if (i === florCount) {
                buffer += `L${i}${j} `
            } else if (i % 2 === 0) {
                buffer += `O${i}${j} `
            } else {
            buffer += `A${i}${j} `
            }
        }
        console.log(buffer);
    }
}

building(["4", "4"])