let numOfPoints = 0;

function isCorrect1B() { //Is called when the user selects the correct answer for question 1
    document.getElementById("Correct1B").innerHTML = "This answer is correct!";
    numOfPoints++;
}

function isCorrect2D() { //Is called when the user selects the correct answer for question 2
    document.getElementById("Correct2D").innerHTML = "This answer is correct!";
    numOfPoints++;
}

function isCorrect3B() { //Is called when the user selects the correct answer for question 3
    document.getElementById("Correct3B").innerHTML = "This answer is correct!";
    numOfPoints++;
}

function isCorrect4B() { //Is called when the user selects the correct answer for question 4
    document.getElementById("Correct4B").innerHTML = "This answer is correct!";
    numOfPoints++;
}

function isCorrect5B() { //Is called when the user selects the correct answer for question 5
    document.getElementById("Correct5B").innerHTML = "This answer is correct!";
    numOfPoints++;
}

function isCorrect6D() { //Is called when the user selects the correct answer for question 6
    document.getElementById("Correct6D").innerHTML = "This answer is correct!";
    numOfPoints++;
}

function isCorrect7C() { //Is called when the user selects the correct answer for question 7
    document.getElementById("Correct7C").innerHTML = "This answer is correct!";
    numOfPoints++;
}

function isCorrect8C() { //Is called when the user selects the correct answer for question 8
    document.getElementById("Correct8C").innerHTML = "This answer is correct!";
    numOfPoints++;
}

function isIncorrect1A() { //Give feedback if the user selects A for question 1
    document.getElementById("Incorrect1A").innerHTML = "This answer is incorrect. A variable is allowed to change its value during execution.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect1C() { //Give feedback if the user selects C for question 1
    document.getElementById("Incorrect1C").innerHTML = "This answer is incorrect. A variable holds a specific value, akin to a box containing some contents. A loop executes some code repeatedly."
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect1D() { //Give feedback if the user selects D for question 1
    document.getElementById("Incorrect1D").innerHTML = "This answer is incorrect. A function is a programming block that uses variables, but a function itself is not a variable.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect2A() { //Give feedback if the user selects A for question 2
    document.getElementById("Incorrect2A").innerHTML = "This answer is incorrect. Integer is a primitive data type in most programming languages, for example in Java.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect2B() { //Give feedback if the user selects B for question 2
    document.getElementById("Incorrect2B").innerHTML = "This answer is incorrect. Boolean is a common primitive data type that consists of the values 'true' and 'false'";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect2C() { //Give feedback if the user selects C for question 2
    document.getElementById("Incorrect2C").innerHTML = "This answer is incorrect. In some programming languages, String is a primitive data type. In other languages, it is not a primitive data type.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect3A() { //Give feedback if the user selects A for question 3
    document.getElementById("Incorrect3A").innerHTML = "This answer is incorrect. The modulo operator returns the remainder of the division, not the quotient.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect3C() { //Give feedback if the user selects C for question 3
    document.getElementById("Incorrect3C").innerHTML = "This answer is incorrect. The modulo operator returns the remainder of the division, not the product of two numbers.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect3D() { //Give feedback if the user selects D for question 3
    document.getElementById("Incorrect3D").innerHTML = "This answer is incorrect. The modulo operator does not return the absolute value of a number.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect4A() { //Give feedback if the user selects A for question 4
    document.getElementById("Incorrect4A").innerHTML = "This answer is incorrect. The loop variable is only initialized before the first iteration of the for-loop.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect4C() { //Give feedback if the user selects C for question 4
    document.getElementById("Incorrect4C").innerHTML = "This answer is incorrect. The program does not terminate during the execution of the for-loop. The program terminates after every line of code is executed.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect4D() { //Give feedback if the user selects D for question 4
    document.getElementById("Incorrect4D").innerHTML = "This answer is incorrect. The variables do not reset to zero during execution of the for-loop.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect5A() { //Give feedback if the user selects A for question 5
    document.getElementById("Incorrect5A").innerHTML = "This statement is false. Inside the parentheses are two conditional statements connected by 'AND'. Both conditions have to be true in order to return true. Only one of the conditions is true, so cout prints 'False'.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect5C() { //Give feedback if the user selects C for question 5
    document.getElementById("Incorrect5C").innerHTML = "This answer is incorrect. The cout statement would not produce an error. The conditional statements are evaluated first, and then cout prints the result.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect5D() { //Give feedback if the user selects D for question 5
    document.getElementById("Incorrect5D").innerHTML = "This answer is incorrect. The cout statement prints out the result of a boolean expression, which is either true (1) or false (0).";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect6A() { //Give feedback if the user selects A for question 6
    document.getElementById("Incorrect6A").innerHTML = "This answer is incorrect. An algorithm is not a programming language. A programming language takes advantage of algorithms.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect6B() { //Give feedback if the user selects B for question 6
    document.getElementById("Incorrect6B").innerHTML = "This answer is incorrect. An algorithm is not a debugging tool.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect6C() { //Give feedback if the user selects C for question 6
    document.getElementById("Incorrect6C").innerHTML = "This answer is incorrect. An algorithm is not computer hardware.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect7A() { //Give feedback if the user selects A for question 7
    document.getElementById("Incorrect7A").innerHTML = "This answer is incorrect";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}   

function isIncorrect7B() { //Give feedback if the user selects B for question 7
    document.getElementById("Incorrect7B").innerHTML = "This answer is incorrect.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect7D() { //Give feedback if the user selects D for question 7
    document.getElementById("Incorrect7D").innerHTML = "This answer is incorrect.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect8A() { //Give feedback if the user selects A for question 8
    document.getElementById("Incorrect8A").innerHTML = "This answer is incorrect. If the statements were to be executed in the order of 'a-b-c', there would be an error since there is no value for the 'quizzes' variable.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect8B() { //Give feedback if the user selects B for question 8
    document.getElementById("Incorrect8B").innerHTML = "This answer is incorrect. The order of 'b-a-c' would bring a syntax error, since there is no value for 'quizzes'.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function isIncorrect8D() { //Give feedback if the user selects D for question 8
    document.getElementById("Incorrect8D").innerHTML = "This answer is incorrect. The order of 'b-c-a' would bring a syntax error, since there is no value for 'quizzes'.";
    if (numOfPoints === 0) {
        //do nothing
    } else {
        numOfPoints--;
    }
}

function showCheckMark1() { //Show a checkmark for the correct answer
    const img = document.createElement("img");
    img.src = 'https://images.creativefabrica.com/products/previews/2024/03/27/2cOWoLrfZ/2eHEXT7VaXTHXpQuVFR6uPDUyOL-desktop.jpg';
    img.alt = 'A checkmark';
    img.width = 20;

    const container = document.getElementById("CorrectAnswer1");
    container.prepend(img);
}

function showCheckMark2() { //Show a checkmark for the correct answer
    const img = document.createElement("img");
    img.src = 'https://images.creativefabrica.com/products/previews/2024/03/27/2cOWoLrfZ/2eHEXT7VaXTHXpQuVFR6uPDUyOL-desktop.jpg';
    img.alt = 'A checkmark';
    img.width = 20;

    const container = document.getElementById("CorrectAnswer2");
    container.prepend(img);
}

function showCheckMark3() { //Show a checkmark for the correct answer
    const img = document.createElement("img");
    img.src = 'https://images.creativefabrica.com/products/previews/2024/03/27/2cOWoLrfZ/2eHEXT7VaXTHXpQuVFR6uPDUyOL-desktop.jpg';
    img.alt = 'A checkmark';
    img.width = 20;

    const container = document.getElementById("CorrectAnswer3");
    container.prepend(img);
}

function showCheckMark4() { //Show a checkmark for the correct answer
    const img = document.createElement("img");
    img.src = 'https://images.creativefabrica.com/products/previews/2024/03/27/2cOWoLrfZ/2eHEXT7VaXTHXpQuVFR6uPDUyOL-desktop.jpg';
    img.alt = 'A checkmark';
    img.width = 20;

    const container = document.getElementById("CorrectAnswer4");
    container.prepend(img);
}

function showCheckMark5() { //Show a checkmark for the correct answer
    const img = document.createElement("img");
    img.src = 'https://images.creativefabrica.com/products/previews/2024/03/27/2cOWoLrfZ/2eHEXT7VaXTHXpQuVFR6uPDUyOL-desktop.jpg';
    img.alt = 'A checkmark';
    img.width = 20;

    const container = document.getElementById("CorrectAnswer5");
    container.prepend(img);
}

function showCheckMark6() { //Show a checkmark for the correct answer
    const img = document.createElement("img");
    img.src = 'https://images.creativefabrica.com/products/previews/2024/03/27/2cOWoLrfZ/2eHEXT7VaXTHXpQuVFR6uPDUyOL-desktop.jpg';
    img.alt = 'A checkmark';
    img.width = 20;

    const container = document.getElementById("CorrectAnswer6");
    container.prepend(img);
}

function showCheckMark7() { //Show a checkmark for the correct answer
    const img = document.createElement("img");
    img.src = 'https://images.creativefabrica.com/products/previews/2024/03/27/2cOWoLrfZ/2eHEXT7VaXTHXpQuVFR6uPDUyOL-desktop.jpg';
    img.alt = 'A checkmark';
    img.width = 20;

    const container = document.getElementById("CorrectAnswer7");
    container.prepend(img);
}

function showCheckMark8() { //Show a checkmark for the correct answer
    const img = document.createElement("img");
    img.src = 'https://images.creativefabrica.com/products/previews/2024/03/27/2cOWoLrfZ/2eHEXT7VaXTHXpQuVFR6uPDUyOL-desktop.jpg';
    img.alt = 'A checkmark';
    img.width = 20;

    const container = document.getElementById("CorrectAnswer8");
    container.prepend(img);
}

//Show an 'X' mark next to the incorrect answer that the user chose
function showXMark1A() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("1A");
    container.prepend(img);
}


function showXMark1C() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("1C");
    container.prepend(img);
}

function showXMark1D() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("1D");
    container.prepend(img);
}

function showXMark2A() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("2A");
    container.prepend(img);
}

function showXMark2B() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("2B");
    container.prepend(img);
}


function showXMark2C() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("2C");
    container.prepend(img);
}

function showXMark3A() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("3A");
    container.prepend(img);
}

function showXMark3C() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("3C");
    container.prepend(img);
}


function showXMark3D() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("3D");
    container.prepend(img);
}


function showXMark4A() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("4A");
    container.prepend(img);
}


function showXMark4C() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("4C");
    container.prepend(img);
}

function showXMark4D() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("4D");
    container.prepend(img);
}


function showXMark5A() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("5A");
    container.prepend(img);
}


function showXMark5C() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("5C");
    container.prepend(img);
}


function showXMark5D() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("5D");
    container.prepend(img);
}


function showXMark6A() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("6A");
    container.prepend(img);
}


function showXMark6B() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("6B");
    container.prepend(img);
}


function showXMark6C() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("6C");
    container.prepend(img);
}


function showXMark7A() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("7A");
    container.prepend(img);
}


function showXMark7B() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("7B");
    container.prepend(img);
}


function showXMark7D() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("7D");
    container.prepend(img);
}


function showXMark8A() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("8A");
    container.prepend(img);
}


function showXMark8B() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("8B");
    container.prepend(img);
}


function showXMark8D() {
    const img = document.createElement("img");
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhv-n_BHNP17Bxs9L9F74b1gwK1bu_CajhQ&s';
    img.alt = 'A red X sign';
    img.width = 20;

    const container = document.getElementById("8D");
    container.prepend(img);
}

//Disable all buttons when a question is answered
function disableButtonsQuestion1() {
    const button1 = document.getElementById("my-button1A");
    const button2 = document.getElementById("my-button1B");
    const button3 = document.getElementById("my-button1C");
    const button4 = document.getElementById("my-button1D");
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    
}

function disableButtonsQuestion2() {
    const button1 = document.getElementById("my-button2A");
    const button2 = document.getElementById("my-button2B");
    const button3 = document.getElementById("my-button2C");
    const button4 = document.getElementById("my-button2D");
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
}

function disableButtonsQuestion3() {
    const button1 = document.getElementById("my-button3A");
    const button2 = document.getElementById("my-button3B");
    const button3 = document.getElementById("my-button3C");
    const button4 = document.getElementById("my-button3D");
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
}

function disableButtonsQuestion4() {
    const button1 = document.getElementById("my-button4A");
    const button2 = document.getElementById("my-button4B");
    const button3 = document.getElementById("my-button4C");
    const button4 = document.getElementById("my-button4D");
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
}

function disableButtonsQuestion5() {
    const button1 = document.getElementById("my-button5A");
    const button2 = document.getElementById("my-button5B");
    const button3 = document.getElementById("my-button5C");
    const button4 = document.getElementById("my-button5D");
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
}

function disableButtonsQuestion6() {
    const button1 = document.getElementById("my-button6A");
    const button2 = document.getElementById("my-button6B");
    const button3 = document.getElementById("my-button6C");
    const button4 = document.getElementById("my-button6D");
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
}

function disableButtonsQuestion7() {
    const button1 = document.getElementById("my-button7A");
    const button2 = document.getElementById("my-button7B");
    const button3 = document.getElementById("my-button7C");
    const button4 = document.getElementById("my-button7D");
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
}

function disableButtonsQuestion8() {
    const button1 = document.getElementById("my-button8A");
    const button2 = document.getElementById("my-button8B");
    const button3 = document.getElementById("my-button8C");
    const button4 = document.getElementById("my-button8D");
    button1.disabled = true;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
}


function showScore() {
    let percentage = (numOfPoints / 8) * 100;
    localStorage.setItem("score", percentage);
}