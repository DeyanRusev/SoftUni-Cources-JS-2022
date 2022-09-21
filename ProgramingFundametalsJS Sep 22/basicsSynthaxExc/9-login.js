function login(input) {
    
    let index = 0
    
    let userName = input[index];
    index++

    let pass = input[index];
    index++;

    let transPass = ''
    for (let i = (pass.length - 1); i >= 0; i--) {
        
        let digit = `${pass.charAt(i)}`
        transPass += digit;
    }

    let wrongCount = 0
    while (userName !== transPass) {

        wrongCount++ 
        
        
        pass = input[index];
        index++;
        
        transPass = '';
        
        if(wrongCount === 4){
            console.log(`User ${userName} blocked!`);
            return;
        }
        for (let i = (pass.length - 1); i >= 0; i--) {
            
            let digit = `${pass.charAt(i)}`
            transPass += digit;
        }
        
        console.log(`Incorrect password. Try again.`);
    }
    console.log(`User ${userName} logged in.`)
    
 
}
login(['sunny','rainy','cloudy','sunny','not sunny'])