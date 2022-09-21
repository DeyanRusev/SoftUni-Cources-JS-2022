function operationsBetweenNumbers(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let operator = input[2];

    switch (operator) {

        case "+":
            result = n1 + n2;
            if(result % 2 === 0){
                console.log(`${n1} ${operator} ${n2} = ${result} - even`)
            } else {
                console.log(`${n1} ${operator} ${n2} = ${result} - odd`)
            }; break;
        case "-":
            result = n1 - n2;
            if(result % 2 === 0){
                console.log(`${n1} ${operator} ${n2} = ${result} - even`)
            } else {
                console.log(`${n1} ${operator} ${n2} = ${result} - odd`)
            }; break;
        case "*":
            result = n1 * n2; 
            if(result % 2 === 0){
                console.log(`${n1} ${operator} ${n2} = ${result} - even`)
            } else {
                console.log(`${n1} ${operator} ${n2} = ${result} - odd`)
            }; break;
        case "/":
            result = (n1 / n2).toFixed(2);
            if(n2 === 0) {
                console.log(`Cannot divide ${n2} by zero`)
            } else {
                console.log(`${n1} ${operator} ${n2} = ${result}`)
                
            }; break;
        case "%":
            result = n1 % n2;
            if(n2 === 0) {
                console.log(`Cannot divide ${n2} by zero`)
            } else {
                console.log(`${n1} ${operator} ${n2} = ${result}`)

            }; break;
            
    }
 
}


// operationsBetweenNumbers(["10", "12", "+"])
// operationsBetweenNumbers(["123", "12", "/"]) 
operationsBetweenNumbers(["112", "0", "/"])