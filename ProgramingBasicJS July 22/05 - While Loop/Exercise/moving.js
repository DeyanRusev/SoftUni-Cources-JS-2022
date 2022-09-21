function moving(input) {

    let index = 0;

    let freeSpaceWidth = Number(input[index]);
    index++;

    let freeSpaceLenght = Number(input[index]);
    index++;

    let freeSpaceHight = Number(input[index]);
    index++;

    let freeSpaceVolume = freeSpaceHight * freeSpaceLenght * freeSpaceWidth;
    let boxesVolume = 0;
    let boxesTotalVolume = 0;
    let isDone = true;
    let command = input[index];
    index++;

    while (command !== 'Done') {

        boxesVolume = Number(command);
        boxesTotalVolume += boxesVolume;

        if(boxesTotalVolume >= freeSpaceVolume) {

            console.log(`No more free space! You need ${boxesTotalVolume - freeSpaceVolume} Cubic meters more.`);
            isDone = false;
            break;
        }

        command = input[index];
        index++;

    }
    
    

    if(isDone) {

        console.log(`${freeSpaceVolume - boxesTotalVolume} Cubic meters left.`);
    }
}

moving(["10",

"1",

"2",

"4",

"6",

"Done"])