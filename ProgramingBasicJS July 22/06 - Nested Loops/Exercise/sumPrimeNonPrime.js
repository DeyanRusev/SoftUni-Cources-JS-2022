function sumPrimeNonPrime(input) {

    let index = 0;

    let command = input[index];
    index++;

    let sumOfPrime = 0;
    let sumOfNonPrime = 0;

    while (command !== "stop") {

        let num = Number(command);

        if (num < 0) {
            console.log("Number is negative.");
            command = input[index];
            index++;
            continue;
        }

        let isPrime = true;

        for (let devider = 2; devider < num; devider++) {

            if (num % devider === 0) {

                isPrime = false;
                break;
            }
        }

        if (isPrime === true) {
            
            sumOfPrime += num;
        } else {
            sumOfNonPrime +=num;
        }
        command = input[index];
        index++
    }

    console.log(`Sum of all prime numbers is: ${sumOfPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumOfNonPrime}`);


}


sumPrimeNonPrime(["30",

"83",

"33",

"-1",

"20",

"stop"])
