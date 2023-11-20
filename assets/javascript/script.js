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
queOneOpt1.textContent = "A. Object-Oriented";
let queOneOpt2 = document.createElement('button');
queOneOpt2.textContent = "B. Object Based"; 
let queOneOpt3 = document.createElement('button');
queOneOpt3.textContent = "C. Procedural";
let queOneOpt4 = document.createElement('button');
queOneOpt4.textContent = "D. None of the Above";



let question2 = document.createElement('h2');
question2.textContent = "#2 Which of the following methods is used to access HTML elements using JavaScript?"
let queTwoOpt1 = document.createElement('button');
queTwoOpt1.textContent = "A. getElementbyId()";
let queTwoOpt2 = document.createElement('button');
queTwoOpt2.textContent = "B. getElementsByClassName()";
let queTwoOpt3 = document.createElement('button');
queTwoOpt3.textContent = "C. Both A and B"
let queTwoOpt4 = document.createElement('button');
queTwoOpt4.textContent = "D. None of the above";



let question3 = document.createElement('h2');
question3.textContent = "#3 Which of the following keywords is uded to define a variable in JavaScript?";
let queThrOpt1 = document.createElement('button');
queThrOpt1.textContent = "A. var";
let queThrOpt2 = document.createElement('button');
queThrOpt2.textContent = "B. let";
let queThrOpt3 = document.createElement('button');
queThrOpt3.textContent = "C. Both A and B";
let queThrOpt4 = document.createElement('button');
queThrOpt4.textContent = "D. None of the above";



let question4 = document.createElement('h2');
question4.textContent = "#4 How to stop and interval timer in JavaScript?";
let queFourOpt1 = document.createElement('button');
queFourOpt1.textContent = "A. clearInterval";
let queFourOpt2 = document.createElement('button');
queFourOpt2.textContent = "B. clearTimer";
let queFourOpt3 = document.createElement('button');
queFourOpt3.textContent = "C. intervalOver";
let queFourOpt4 = document.createElement('button');
queFourOpt4.textContent = "D. None of the Above";



let question5 = document.createElement('h2');
question5.textContent = "#5 How do we write a comment in JavaScript?"
let queFiveOpt1 = document.createElement('button');
queFiveOpt1.textContent = "A. /* */"
let queFiveOpt2 = document.createElement('button');
queFiveOpt2.textContent = "B. //"
let queFiveOpt3 = document.createElement('button');
queFiveOpt3.textContent = "C. #"
let queFiveOpt4 = document.createElement('button');
queFiveOpt4.textContent = "D. $ $"

question1.appendChild(queOneOpt1);
question1.appendChild(queOneOpt2);
question1.appendChild(queOneOpt3);
question1.appendChild(queOneOpt4);

question2.appendChild(queTwoOpt1);
question2.appendChild(queTwoOpt2);
question2.appendChild(queTwoOpt3);
question2.appendChild(queTwoOpt4);

question3.appendChild(queThrOpt1);
question3.appendChild(queThrOpt2);
question3.appendChild(queThrOpt3);
question3.appendChild(queThrOpt4);

question4.appendChild(queFourOpt1);
question4.appendChild(queFourOpt2);
question4.appendChild(queFourOpt3);
question4.appendChild(queFourOpt4);

question5.appendChild(queFiveOpt1);
question5.appendChild(queFiveOpt2);
question5.appendChild(queFiveOpt3);
question5.appendChild(queFiveOpt4);

questions = [question1,question2,question3,question4,question5]

//function to iterate and print out the Questions

let questionDisplay = document.querySelector(".intro-blurb");
let choices = document.querySelector(".multiple-Choice");
let startButton = document.querySelector(".start-button")

let quizStarted = false;
let timer;
let timerCount;

//Start Quiz function that will begin the game on button press using event listeners

function startQuiz() {
    quizStarted = false;
    countDown = 60;
    startButton.disabled = true;
    counter();
    displayQuestion();
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

function displayQuestion() {
    //replace text content in #intro-blurb with questions
    questionDisplay.innerHTML = "";


    //for loop to display questions
    for (let i = 0; i <= questions.length; i++){
        //append questions to questionDisplay
        
        questionDisplay.appendChild(questions[i])

    }
return;
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
    })
}

startButton.addEventListener("click", startQuiz());