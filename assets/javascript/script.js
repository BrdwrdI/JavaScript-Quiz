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
let queOneopt1 = document.createElement('li','button');
let queOneopt2 = document.createElement('li','button');
let queOneopt3 = document.createElement('li','button');
let queOneopt4 = document.createElement('li','button');

let question2 = document.createElement('h2');
let queTwoopt1 = document.createElement('li','button');
let queTwoopt2 = document.createElement('li','button');
let queTwoopt3 = document.createElement('li','button');
let queTwoopt4 = document.createElement('li','button');

let question3 = document.createElement('h2');
let queThropt1 = document.createElement('li','button');
let queTheopt2 = document.createElement('li','button');
let queThropt3 = document.createElement('li','button');
let queThropt4 = document.createElement('li','button');

let question4 = document.createElement('h2');
let queFouropt1 = document.createElement('li','button');
let queFouropt2 = document.createElement('li','button');
let queFouropt3 = document.createElement('li','button');
let queFouropt4 = document.createElement('li','button');

let question5 = document.createElement('h2');
let queFiveopt1 = document.createElement('li','button');
let queFiveopt2 = document.createElement('li','button');
let queFiveopt3 = document.createElement('li','button');
let queFiveopt4 = document.createElement('li','button');


//Start Quiz function that will begin the game on button press using event listeners

let startQuiz = document.querySelector("start-game")

function startQuiz(){

}


//Timer Below
let timeEl = document.querySelector("timer");

let countDown = 60;

function counter() {
    let timerInterval = setInterval(function(){
        countDown--;
        timeEl.textContent = countDown;

        //insert if/then to stop timer on quiz completion/time runs out

    })
}