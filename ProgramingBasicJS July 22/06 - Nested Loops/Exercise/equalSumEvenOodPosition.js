function equalSumEvenOodPosition(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let result = '';

    for (let currentNum = startNum; currentNum <= endNum; currentNum++) {

        let currentNumAsString = currentNum.toString();

        let evenSum = 0;
        let oddSum = 0;

        for (let index = 0; index < currentNumAsString.length; index++) {

            let currentDigit = Number(currentNumAsString[index]);
            let position = index + 1;

            if (position % 2 === 0) {

                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        
        if (oddSum === evenSum) {
            result += `${currentNumAsString} `;
        }
    }
    console.log(result);
}

equalSumEvenOodPosition(["100000",

"100050"])