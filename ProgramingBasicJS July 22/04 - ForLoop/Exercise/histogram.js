function histogram(input) {

    let n = Number(input[0]);

    let countGroup1 = 0
    let countGroup2 = 0
    let countGroup3 = 0
    let countGroup4 = 0
    let countGroup5 = 0


    for (let i = 1; i <= n; i++) {

        let currentNum = Number(input[i])

        if (currentNum < 200) {

            countGroup1 += 1;

        } else if (currentNum < 400) {
              countGroup2 += 1;
        } else if (currentNum < 600) {
            countGroup3 += 1;
        } else if (currentNum < 800) {
            countGroup4 += 1;
        } else {
            countGroup5 += 1;
        }
    }
    console.log(((countGroup1 / n) * 100).toFixed(2) + '%')
    console.log(((countGroup2 / n) * 100).toFixed(2) + '%')
    console.log(((countGroup3 / n) * 100).toFixed(2) + '%')
    console.log(((countGroup4 / n) * 100).toFixed(2) + '%')
    console.log(((countGroup5 / n) * 100).toFixed(2) + '%')
}

  



histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])