//Questions for the user

//#1  JavaScript is an _____ Language?
//  Object-Oriented   *correct*
//  Object-Based
//  Procedural
//  None of these answers

//#2  Which of the following methods is used to access HTML elements using JavaScript?
//  getElementbyId()
//  getElementsByClassName()
//  Both A and B   *correct*
//  None of the above

//#3  Which of the following keywords is uded to define a variable in JavaScript?
//  var
//  let
//  both A and B   *correct*
//  None of the above

//#4  How to stop and interval timer in JavaScript?
//  clearInterval  *correct*
//  clearTimer
//  intervalOver
//  None of the above

//#5  How do we write a comment in JavaScript?
//  /* */
//  //   *correct*
//  #
//  $  $

//establish Variables to insert quiz ?s in the dom 

//create function to display question and create elements to display

let question1 = document.createElement('h2');
question1.textContent = "#1 JavaScript is an _____ Language?";

let queOneOpt1 = document.createElement('button');
queOneOpt1.textContent = "A. Object-Oriented"; //correct
queOneOpt1.setAttribute('option-btn');
queOneOpt1.getElementById('id', "Correct");

let queOneOpt2 = document.createElement('button');
queOneOpt2.textContent = "B. Object Based"; 
queOneOpt2.setAttribute('option-btn');
queOneOpt2.getElementById('id', "incorrect");

let queOneOpt3 = document.createElement('button');
queOneOpt3.textContent = "C. Procedural";
queOneOpt3.setAttribute('option-btn');
queOneOpt3.getElementById('id', "incorrect");

let queOneOpt4 = document.createElement('button');
queOneOpt4.textContent = "D. None of the Above";
queOneOpt4.setAttribute('option-btn');
queOneOpt4.getElementById('id', "incorrect");



let question2 = document.createElement('h2');
question2.textContent = "#2 Which of the following methods is used to access HTML elements using JavaScript?"

let queTwoOpt1 = document.createElement('button');
queTwoOpt1.textContent = "A. getElementbyId()";
queTwoOpt1.setAttribute('option-btn');
queTwoOpt1.getElementById('id', "incorrect");

let queTwoOpt2 = document.createElement('button');
queTwoOpt2.textContent = "B. getElementsByClassName()";
queTwoOpt2.setAttribute('option-btn');
queTwoOpt2.getElementById('id', "incorrect");

let queTwoOpt3 = document.createElement('button');
queTwoOpt3.textContent = "C. Both A and B" //correct
queTwoOpt3.setAttribute('option-btn');
queTwoOpt3.getElementById('id', "Correct");

let queTwoOpt4 = document.createElement('button');
queTwoOpt4.textContent = "D. None of the above";
queTwoOpt4.setAttribute('option-btn');
queTwoOpt4.getElementById('id', "incorrect");



let question3 = document.createElement('h2');
question3.textContent = "#3 Which of the following keywords is uded to define a variable in JavaScript?";

let queThrOpt1 = document.createElement('button');
queThrOpt1.textContent = "A. var"; 
queThrOpt1.setAttribute('option-btn');
queThrOpt1.getElementById('id', "incorrect");

let queThrOpt2 = document.createElement('button');
queThrOpt2.textContent = "B. let";
queThrOpt2.setAttribute('option-btn');
queThrOpt2.getElementById('id', "incorrect");

let queThrOpt3 = document.createElement('button');
queThrOpt3.textContent = "C. Both A and B"; //correct
queThrOpt3.setAttribute('option-btn');
queThrOpt3.getElementById('id', "Correct");

let queThrOpt4 = document.createElement('button');
queThrOpt4.textContent = "D. None of the above";
queThrOpt4.setAttribute('option-btn');
queThrOpt4.getElementById('id', "incorrect");



let question4 = document.createElement('h2');
question4.textContent = "#4 How to stop and interval timer in JavaScript?";

let queFourOpt1 = document.createElement('button');
queFourOpt1.textContent = "A. clearInterval"; //correct
queFourOpt1.setAttribute('option-btn');
queFourOpt1.getElementById('id', "Correct");

let queFourOpt2 = document.createElement('button');
queFourOpt2.textContent = "B. clearTimer";
queFourOpt2.setAttribute('option-btn');
queFourOpt2.getElementById('id', "incorrect");

let queFourOpt3 = document.createElement('button');
queFourOpt3.textContent = "C. intervalOver";
queFourOpt3.setAttribute('option-btn');
queFourOpt3.getElementById('id', "incorrect");

let queFourOpt4 = document.createElement('button');
queFourOpt4.textContent = "D. None of the Above";
queFourOpt4.setAttribute('option-btn');
queFourOpt4.getElementById('id', "incorrect");



let question5 = document.createElement('h2');
question5.textContent = "#5 How do we write a comment in JavaScript?"

let queFiveOpt1 = document.createElement('button');
queFiveOpt1.textContent = "A. /* */"
queFiveOpt1.setAttribute('option-btn');
queFiveOpt1.getElementById('id', "incorrect");

let queFiveOpt2 = document.createElement('button');
queFiveOpt2.textContent = "B. //" //correct
queFiveOpt2.setAttribute('option-btn');
queFiveOpt2.getElementById('id', "Correct");

let queFiveOpt3 = document.createElement('button');
queFiveOpt3.textContent = "C. #"
queFiveOpt3.setAttribute('option-btn');
queFiveOpt3.getElementById('id', "incorrect");

let queFiveOpt4 = document.createElement('button');
queFiveOpt4.textContent = "D. $ $"
queFiveOpt4.setAttribute('option-btn');
queFiveOpt4.getElementById('id', "incorrect");

// question1.appendChild(queOneOpt1);
// question1.appendChild(queOneOpt2);
// question1.appendChild(queOneOpt3);
// question1.appendChild(queOneOpt4);

// question2.appendChild(queTwoOpt1);
// question2.appendChild(queTwoOpt2);
// question2.appendChild(queTwoOpt3);
// question2.appendChild(queTwoOpt4);

// question3.appendChild(queThrOpt1);
// question3.appendChild(queThrOpt2);
// question3.appendChild(queThrOpt3);
// question3.appendChild(queThrOpt4);

// question4.appendChild(queFourOpt1);
// question4.appendChild(queFourOpt2);
// question4.appendChild(queFourOpt3);
// question4.appendChild(queFourOpt4);

// question5.appendChild(queFiveOpt1);
// question5.appendChild(queFiveOpt2);
// question5.appendChild(queFiveOpt3);
// question5.appendChild(queFiveOpt4);

// questions = [question1,question2,question3,question4,question5]

//function to iterate and print out the Questions

let questionDisplay = document.querySelector(".intro-blurb");
let choices = document.querySelector(".multiple-Choice");
let startButton = document.querySelector(".start-button");
let options = document.getElementsById(".option");


let quizStarted = false;
let timer;
let timerCount;

//Start Quiz function that will begin the game on button press using event listeners

function startQuiz() {
    quizStarted = false;
    countDown = 60;
    startButton.disabled = true;
    counter();
    console.log(options);
    options.addEventListener("click",displayQuestion(0));
    
}

//quiz complete function will be run when the last questions button is pressed

function quizComplete(){
    questionDisplay.textContent = "Quiz Complete!";
    quizStarted.disabled = false;
}

function outOfTime() {
    questionDisplay.textContent = "Time's Up!";
    quizStarted.disabled = false;
}

function displayQuestion(i) {
    //replace text content in #intro-blurb with questions
    questionDisplay.innerHTML = "";
    questionDisplay.appendChild(questions[i]);
    i++;
    // for(let j = 0; j <= questions.length; j++){
    // questionDisplay.appendChild(questions[j]);
    // options = document.getElementsByTagName("button");
    // console.log(options);
    // }
}

//Timer Below
let timeEl = document.querySelector(".timer");

function counter() {
    let timerInterval = setInterval(function(){
        countDown--;
        timeEl.textContent = countDown;
        //insert if/then to stop timer on quiz completion/time runs out
        if (timerCount >= 0) {
            //create quiz end functions
            if (quizStarted && countDown > 0) {
                clearInterval(timerInterval);
                quizComplete();
            }
        }
        if (countDown === 0) {
            clearInterval(timerInterval);
            outOfTime();
        }
    }, 1000);
}

startButton.addEventListener("click", startQuiz);