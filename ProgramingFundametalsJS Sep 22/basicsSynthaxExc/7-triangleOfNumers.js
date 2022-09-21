function triangleOfNumbers(n) {

    for (let i = 1; i <= n; i++) {

        let num = '';
        for (let m = 1; m <= i; m++) {
            num += `${i} `
        }
        console.log(num)
    }    
}
triangleOfNumbers(6)