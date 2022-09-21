function lunchBreak(input) {

    let seriesName = input[0];
    let seriesDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let timeForLunch = breakDuration / 8;
    let timeForRelax = breakDuration / 4;

    let totalTimeNeeded = timeForLunch + timeForRelax + seriesDuration;

    if(totalTimeNeeded <= breakDuration) {
      console.log(`You have enough time to watch ${seriesName} and left with ${Math.ceil(breakDuration - totalTimeNeeded)} minutes free time.`)
    } else { 
        console.log(`You don't have enough time to watch ${seriesName}, you need ${Math.ceil(totalTimeNeeded - breakDuration)} more minutes.`)
    }

    } 



//lunchBreak(["Game of Thrones", "60", "96"])
lunchBreak(["Teen Wolf", "48", "60"])