function specialScore(input) {

    let num = Number(input);

    let magicNumber = '';

    for (let currentNum = 1111; currentNum <= 9999; currentNum++){

        let currentNumAsString = currentNum.toString();

        let currentCount = 0;
        
        for (let index = 0; index < currentNumAsString.length; index++) {
            
            let currentDigit = Number(currentNumAsString[index]);

            if (num % currentDigit === 0) {
                
                currentCount++;
           
            }

            if (currentCount == 4) {
                magicNumber += `${currentNum } `;
            }
        }
    }  
    console.log(magicNumber)

}

specialScore(["16"])