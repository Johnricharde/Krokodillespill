// DECLARING VARIABLES----------------------------------------------------------DECLARING VARIABLES
let firstNum = document.getElementById('first-num');
let secondNum = document.getElementById('second-num');
let scoreboard = document.getElementById('scoreboard');
let points = 0;

// CALCULATES IF ANSWER FROM USER IS CORRECT------------------------------------CALCULATES IF ANSWER FROM USER IS CORRECT
function submit() {
    let answerFromUser = document.getElementById('answer-from-user').value;
    let num1 = parseInt(firstNum.textContent);
    let num2 = parseInt(secondNum.textContent);
    
    if (answerFromUser === "<") {
        
        // If input is "<" asks if num1 is lesser than num2
        if (num1 < num2) {
            addPoint()
        } else {
            subtractPoint()
        }

        // If input is ">" asks if num1 is greater than num2
    } else if (answerFromUser === ">") {
        if (num1 > num2) {
            addPoint()
        } else {
            subtractPoint()
        }
        
        // If input is "=" asks if num1 is equal to num2
    } else if (answerFromUser === "=") {
        if (num1 === num2) {
            addPoint()
        } else {
            subtractPoint()
        }
        
        // Logs out error if input is invalid
    } else {
        subtractPoint()
        alert(`INVALID USER INPUT!

        1 point has been redacted as punishment.`)
}

// Resets the numbers after user submits answer
reset()
}

// GENERATES TWO RANDOM NUMBERS FOR "firstNum" AND "secondNum"------------------GENERATES TWO RANDOM NUMBERS FOR "firstNum" AND "secondNum"
function reset() {
    firstNum.textContent = generateRandomNumber();
    secondNum.textContent = generateRandomNumber();
}

// GENERATES RANDOM NUMBER------------------------------------------------------GENERATES RANDOM NUMBER
function generateRandomNumber() {
    let Num = Math.floor(Math.random() * 10 + 1)
    return Num
}

// ADDS 1 POINT-----------------------------------------------------------------ADDS 1 POINT
function addPoint() {
    points++
    scoreboard.textContent = "SCORE: " + points;
}
// SUBTRACTS 1 POINT------------------------------------------------------------SUBTRACTS 1 POINT
function subtractPoint() {
    points--
    scoreboard.textContent = "SCORE: " + points; 
}
