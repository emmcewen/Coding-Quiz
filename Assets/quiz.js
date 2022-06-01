var introEl = document.querySelector("#intro")
var qaViewEl = document.querySelector("#qa-view")
var timerEl = document.querySelector("#timer")
var titleEl = document.querySelector("#title")
var answer1El = document.querySelector("#answer1")
var answer2El = document.querySelector("#answer2")
var answer3El = document.querySelector("#answer3")
var answer4El = document.querySelector("#answer4")
var startQuizBtn = document.querySelector("#start-quiz")
var timeRemaining = 75
var clockid

var question = [{
    title: "new question 1",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    solution: "answer0"
}]

var question = [{
    title: "new question 2",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    solution: "answer1"
}]

var question = [{
    title: "new question 3",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    solution: "answer2"
}]

var question = [{
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
    qaViewEl.classList.remove("hide")
    introEl.classList.add("hide")
    clockid = setInterval(countDown, 1000)
}

function displayQuestions() {
    titleEl.textContent = question[index]
    answer1El.textContent = question[index].answer[0]
    answer2El.textContent = question[index].answer[1]
    answer3El.textContent = question[index].answer[2]
    answer4El.textContent = question[index].answer[3]
}


function nextQuestion() {
    index++
}

answer1El.addEventListener = ("click", nextQuestion)
answer2El.addEventListener = ("click", nextQuestion)
answer3El.addEventListener = ("click", nextQuestion)
answer4El.addEventListener = ("click", nextQuestion)


startQuizBtn.addEventListener("click", startGame)