var questions = document.querySelectorAll(".questions")
var answersQ1 = document.querySelectorAll(".answersQ1")
var answersQ2 = document.querySelectorAll(".answersQ2")
var answersQ3 = document.querySelectorAll(".answersQ3")
var answersQ4 = document.querySelectorAll(".answersQ4")
console.log(questions)
console.log(answersQ1)
console.log(answersQ2)
console.log(answersQ3)
console.log(answersQ4)

var timer; 
var timerCount;
var rightAnswers;
var wrongAnswers;
var startButton= document.querySelector (".start-button")



function init() {
    correctAnswers();
    incorrectAnswers();
  }
  
  // The startQuiz function is called when the start button is clicked
  function startQuiz() {
    rightAnswers = false;
    timerCount = 30;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
    console.log(timerCount)
  }



function startTimer() {
    // Sets timer
    timer = setInterval(function() { //timer has been declared but not set
      timerCount--; //timerCount was set to 30 in line 28, now is 29 because -1
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) { //isWin is determined by checkWin, around line 129
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();//if we won it runs winGame function
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame(); //
      }
    }, 1000);
  }




init()
/* might use this from office hours

button.addEventListener("click",() =>{
    button.style.display = "none";
    setTimeout();
    questions.style.display = "none";
})

var possibleQuestions = [
    {
        questionOne:"question 1",
        answerOne:"one",
        answerTwo: "two",
        correctAnswer:"yep"
    },
    {
        questionTwo:"question 2",
        answerOne:"one",
        answerOne: "two",
        correctAnswer: "yep"
    }
] */

