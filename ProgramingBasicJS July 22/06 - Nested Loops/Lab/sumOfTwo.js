function sumOfTwo (input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let combos = 0;
    isFound = false;

    for (let i = start; i <= end; i++) {

        for (let j = start; j <= end; j++) {

            let result = (i + j)
            combos++;
            if (result == magicNumber) {
                
                console.log(`Combination N:${combos} (${i} + ${j} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
    
        if (isFound) {
            break;
            }
    }

    if (!isFound) {
        console.log(`${combos} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwo(["23",

"24",

"20"])