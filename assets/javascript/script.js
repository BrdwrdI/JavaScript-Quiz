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


//Start Quiz function that will begin the game on button press using event listeners


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