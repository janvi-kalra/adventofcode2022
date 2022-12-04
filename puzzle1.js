// QUESTION: https://adventofcode.com/2022/day/1

const { INPUT } = require('./input');

function calcuateCaloriesPerElf(input) {
    var allCalories = []
    var lines = input.split('\n');
    var calories = 0;
    for (line of lines) {
        if (line === '') {
            // Reset to new elf
            allCalories.push(calories);
            calories = 0;
        } else {
            // Keep adding to same elf
            calories += parseInt(line);
        }
    }
    return allCalories;
}

function partOne(input) {
    const allCalories = calcuateCaloriesPerElf(input);
    return Math.max(...allCalories);
}

function partTwo(input) {
    const allCalories = calcuateCaloriesPerElf(input);
    // Sort in descending order
    allCalories.sort((a, b) => b-a);
    return allCalories[0] + allCalories[1] + allCalories[2]; 
}

console.log(partOne(INPUT));
console.log(partTwo(INPUT));