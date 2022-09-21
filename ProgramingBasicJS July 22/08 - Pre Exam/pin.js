function pin(input) {

    let aLimit = Number(input[0]);
    let bLimit = Number(input[1]);
    let cLimit = Number(input[2]);

    for (let a = 1; a <= aLimit; a++) {
        
        for (let b = 2; b <= bLimit; b++) {
            
            for (let c = 1; c <= cLimit; c++) {
        
                if (a % 2 === 0 && (b % 2 !== 0 || b == 2) && c % 2 === 0) {
                
                    console.log(`${a} ${b} ${c}`);
                        
                }
            
                

            }
        }        
    }

}

pin (["4",
"2",
"8"])