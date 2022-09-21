function printAndSum(start, end) {

    let a = Number(start);
    let b = Number(end);
    let totalSum = 0;
    let numbers = '' 
    for (let index = a; index <= b; index++) {
        numbers += `${index} `;
        totalSum += index;
    }

    console.log(numbers);
    console.log(`Sum: ${totalSum}`);
}

printAndSum(50, 60)