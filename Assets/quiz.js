

var timerEl = document.querySelector("#timer")
var introEl = document.querySelector("#intro")
var startQuizEl = document.querySelector(".start-quiz")
var titleEl = document.querySelector("#title")
var questionEl= document.querySelector("#question-container")
var answer1El = document.querySelector("#answer1")
var answer2El = document.querySelector("#answer2")
var answer3El = document.querySelector("#answer3")
var answer4El = document.querySelector("#answer4")
var timeRemaining = 75
var clockid

var question = [{
    title: "Question 1",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    solution: "answer0"
},{
    title: "Question 2",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    solution: "answer1"
},{
    title: "Question 3",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    solution: "answer2"
},{
    title: "new question 4",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    solution: "answer3"
}]

var index = 0

function countDown() {
    timerEl.textContent = timeRemaining
    timeRemaining--
}


function startGame() {
   startQuizEl.classList.remove("hide")
    introEl.classList.add("hide")
    clockid = setInterval(countDown, 1000)
    displayQuestions()
}

function displayQuestions() {
    titleEl.textContent = question[index].title
    startQuizEl.classList.add("hide")
    answer1El.textContent = question[index].answer[0]
    answer2El.textContent = question[index].answer[1]
    answer3El.textContent = question[index].answer[2]
    answer4El.textContent = question[index].answer[3]
}


function nextQuestion() {
    index++
    displayQuestions()
}

answer1El.addEventListener = ("click", nextQuestion)
answer2El.addEventListener = ("click", nextQuestion)
answer3El.addEventListener = ("click", nextQuestion)
answer4El.addEventListener = ("click", nextQuestion)


startQuizEl.addEventListener("click", startGame)