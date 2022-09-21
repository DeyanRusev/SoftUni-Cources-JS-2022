function projectsCreation(input) {
    let name = input[0];
    let projectsNumber = Number(input[1]);
    let projectHours = projectsNumber * 3;
    
    console.log(`The architect ${name} will need ${projectHours} hours to complete ${projectsNumber} project/s.`); 
}
projectsCreation(['Dimitar Ivanov', 5])