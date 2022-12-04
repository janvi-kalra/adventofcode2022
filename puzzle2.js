const {INPUT} = require('./input.js'); 


function partOne(input) {
    const lines = input.split('\n');
    var totalScore = 0;
    for (line of lines) {
        totalScore += partOneHelper(line[0], line[2]);
    }
    return totalScore; 
}

function partOneHelper(op, me) {
    var score = 0;
    // Add score for selected shape. 
    // LEARNING -- once you hit one case in JS, all get applied
    switch(me) {
        case 'X':
            score += 1;
            break; 
        case 'Y':
            score += 2;
            break; 
        case 'Z': 
            score += 3;
            break; 
    }
    // Add score for drawing
    if ((me === 'X' && op ==='A') || (me === 'Y' && op ==='B') || (me === 'Z' && op ==='C')) {
        score += 3;
    }
    // Add score for winning 
    if ((me === 'X' && op === "C") || (me === 'Y' && op === "A") || (me === 'Z' && op === "B")) {
        score += 6;
    }
    return score; 
}

function partTwo(input) {
    const lines = input.split('\n');
    var totalScore = 0;
    for (line of lines) {
        score = partTwoHelper(line[0], line[2]);
        totalScore += score;
    }
    return totalScore; 
}

// ROCK - A,
// PAPER - B
// SCIZZORS - C

function partTwoHelper(op, result) {
    var score = 0;
    var mymove; 
    // Calculate my move
    if (op === 'A') {
        if (result === 'X') {
            mymove = 'PAPER';
        }
        if (result === 'Y') {
            mymove = 'ROCK';
        }
        if (result === 'Z') {
            mymove = 'SCIZZORS';
        }
    }
    if (op === 'B') {
        if (result === 'X') {
            mymove = 'ROCK';
        }
        if (result === 'Y') {
            mymove = 'PAPER';
        }
        if (result === 'Z') {
            mymove = 'SCIZZORS';
        }
    }
    if (op === 'C') {
        if (result === 'X') {
            mymove = 'PAPER';
        }
        if (result === 'Y') {
            mymove = 'SCIZZORS';
        }
        if (result === 'Z') {
            mymove = 'ROCK';
        }
    }

    // Add score for selected shape. 
    switch(mymove) {
        case 'ROCK':
            score += 1;
            break; 
        case 'PAPER':
            score += 2;
            break; 
        case 'SCIZZORS': 
            score += 3;
            break; 
    }
    // Add score for win/lost
    switch(result) {
        case 'Y':
            score += 3;
            break; 
        case 'Z': 
            score += 6;
            break; 
    }
    return score; 
}


// ROCK A X 
// PAPER B Y 
// SCIZZORS C Z


const tester = `A Y
B X
C Z`;
console.log(partOne(INPUT));
console.log(partTwo(INPUT));