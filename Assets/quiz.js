var introEl= document.querySelector("#intro")
var qaViewEl= document.querySelector("#qa-view")
var timerEl= document.querySelector("#timer")
var startQuizBtn= document.querySelector("#start-quiz")
var timeRemaining=75
var clockid

var question=[{
    title:"new question 1"
    answers:["answer1", "answer2", "answer3", "answer4"]
    solution: "answer2"
}]

var index=0

function countDown(){
timerEl.textContent=timeRemaining
timeRemaining--
}


function startGame(){
qaViewEl.classList.remove("hide")
introEl.classList.add("hide")
clockid=setInterval(countDown, 1000)
}

function displayQuestions(){

}

startQuizBtn.addEventListener("click",startGame)