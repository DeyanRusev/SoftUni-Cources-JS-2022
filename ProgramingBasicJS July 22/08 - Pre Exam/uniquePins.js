function uniquePins(input) {

    let firstNumLimit = Number(input[0]);
    let secondNumLimit = Number(input[1]);
    let thirdNumLimit = Number(input[2]);

    let maxNum = `${firstNumLimit}${secondNumLimit}${thirdNumLimit}`
    

    for (let num = 211; num <= Number(maxNum); num++) {
        
        let numAsString = num.toString();
    
        let digit1 = numAsString[0];
        let digit3 = numAsString[2];
        // for (let index = 0;  index < 3; index++){
            
            // let currentDigit = Number(numAsString[index]);
            // let currentDigit1 = Number(numAsString[index + 1]);
            // let currentDigit2 = Number(numAsString[index + 2]); 
            isMagic1 = false;
            let magicNumber = '';

            if (Number(digit1) % 2 === 0 && (Number(digit1)) < secondNumLimit && Number(digit3) % 2 === 0 && (Number(digit3) < thirdNumLimit)) {

                for (let a = 2; a <= secondNumLimit; a++) {

                    if(a > 1 && a !== 4 && a !== 6) { 

                        magicNumber += num;
                        isMagic1 = true;


                    } else {magicNumber = false} ;
                    

                }

            }
            
        if (isMagic1) {
            console.log(`${magicNumber} `)
        }
        

        

    }

}

uniquePins([
    "3",
    "5",
    "5"
])