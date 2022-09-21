function salary(input) {
    
    let tabCount = Number(input[0]);
    let salary = Number(input[1]);
 

    for (i = 2; i <= tabCount + 1; i++) {

        let currentTab = input[i];
        
        switch (currentTab) {

            case "Facebook": salary -= 150; break;
            case "Instagram": salary -= 100; break;
            case "Reddit": salary -= 50; break;
                
        }
      	if (salary <= 0) {
        
        console.log("You have lost your salary."); return;
        }

    
    
    } 
        console.log(Math.abs(salary));
        
    }  

  



salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])


