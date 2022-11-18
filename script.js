var questions = document.querySelectorAll(".questions")
var questionText = document.querySelector("#questionText")
var answersElement = document.querySelector("#answers")
document.getElementById("questionText").style.display="none";
console.log(questions)
var timer; 
var timerCount;
var selectedAnswer;
var rightAnswers = 0;
var wrongAnswers = 0;
var startButton= document.querySelector (".start-button")
var q1correct;
var questionIndex =0;
var userAnswer;
var timerElement=document.querySelector("#timer");
var possibleQuestions = [
    {
        question:"How do you combine arrays?",
        answerOne:".add",
        answerTwo: ".combine",
        answerThree: ".plus",
        correct:".concat"
    },
    {
        question:"question 2",
        answerOne:"one",
        answerTwo: "two",
        answerThree: "three",
        correct: "yep"
    },
    {
        question:"question 3",
        answerOne:"one",
        answerTwo: "two",
        answerThree: "three",
        correct: "yep"
    },
    {
        question:"question 4",
        answerOne:"one",
        answerTwo: "two",
        answerThree: "three",
        correct: "yep"
    }
]
startButton.addEventListener("click",startQuiz)

function startQuiz() {
    timerCount = 60;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer();
    getQuestions();
    console.log(timerCount);
    document.getElementById("header").style.display="none";

    
  }

function checkAnswer(e){
    userAnswer=e.target.innerText
    console.log(userAnswer)
    //check if answer is correct
    if (userAnswer === possibleQuestions[questionIndex].correct) {
        rightAnswers++;
        console.log(rightAnswers + "right");
        
    } 
    else {
        wrongAnswers++;
        timerCount -=5;
        console.log(wrongAnswers + "wrong")
    }
    //increment question by 1
    questionIndex++;
    //check if there are more questions to display, show next question if there is
    if(possibleQuestions.length > questionIndex) {
        getQuestions()
    }
    else {
        clearInterval(timer);
        var wrongScore=document.createElement("p");
        wrongScore.innerHTML="You got "+ wrongAnswers+ " questions wrong";
        document.body.appendChild(wrongScore);
        var correctScore=document.createElement("p");
        correctScore.innerHTML="You got "+ rightAnswers+ " questions correct";
        document.body.appendChild(correctScore);
        
        
        document.getElementById("questionText").style.display="none";
        document.getElementById("answers").style.display="none";
        document.getElementById("timer").style.display="none";
        if (rightAnswers>=localStorage.getItem("highscore")){
            localStorage.setItem("highscore",rightAnswers)}
        userNameandScore()
    }
    
 }


function startTimer() {
    // Sets timer
    timer = setInterval(function() { //timer has been declared but not set
        timerElement.textContent = timerCount;
        timerCount--; //timerCount was set to 30 in line 28, now is 29 because -1
      if (timerCount <= 0) {        
          clearInterval(timer);    
      }
    }, 1000);
  }

function getQuestions(){
    document.getElementById("questionText").style.display="flex"
    questionText.textContent= possibleQuestions[questionIndex].question;
    var answer1=document.createElement("button");
    answer1.addEventListener("click",checkAnswer);
    answer1.textContent=possibleQuestions[questionIndex].answerOne;
    var answer2=document.createElement("button");
    answer2.addEventListener("click", checkAnswer);
    answer2.textContent=possibleQuestions[questionIndex].answerTwo;
    var answer3=document.createElement("button");
    answer3.addEventListener("click", checkAnswer);
    answer3.textContent=possibleQuestions[questionIndex].answerThree;
    var correctAnswer=document.createElement("button");
    correctAnswer.addEventListener("click", checkAnswer);
    correctAnswer.textContent=possibleQuestions[questionIndex].correct;
    answersElement.innerHTML="";
    answersElement.append(answer1, answer2, answer3, correctAnswer);

}
console.log(rightAnswers)
console.log(wrongAnswers)


function userNameandScore(){
    var userName=document.getElementById("userName")
    var score=document.getElementById("score")
    if (rightAnswers>localStorage.getItem("highscore")){
        localStorage.setItem("highscore",rightAnswers)
    }
    
}
//startQuiz();

/*function checkCorrect(){
    if (selectedAnswerQ1===q1correct) {
        rightAnswers++;
        else {
            wrongAnswers ++;
        }

    }
}

*/
//init()


/* might use this from office hours

button.addEventListener("click",() =>{
    button.style.display = "none";
    setTimeout();
    questions.style.display = "none";
})*/