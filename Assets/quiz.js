

var timerEl = document.querySelector("#timer")
var introEl = document.querySelector("#intro")
var startEl = document.querySelector("#start")
var titleEl = document.querySelector("#title")
var containerEl = document.querySelector(".container")
var questionEl = document.querySelector("#question-container")
var scoreEl = document.querySelector(".score-timer")
var answerEl = document.querySelector(".answer")
var answer1El = document.getElementById("answer1")
var answer2El = document.getElementById("answer2")
var answer3El = document.getElementById("answer3")
var answer4El = document.getElementById("answer4")
var initialEl = document.querySelector("#input-initial")
var highscoreEl = document.querySelector("#highscore")
var scoresEl=document.querySelector("#score")
var initialsEl = document.querySelector("#initials")
var timeRemaining = 75
var highScores;
var clockid;

var question = [{
    title: "Question 1",
    answers: ["answer1", "answer2", "answer3", "answer4"],
    solution: "answer0"
}, {
    title: "Question 2",
    answers: ["answer1", "answer3", "answer2", "answer4"],
    solution: "answer1"
}, {
    title: "Question 3",
    answers: ["answer2", "answer1", "answer4", "answer3"],
    solution: "answer2"
}, {
    title: "Question 4",
    answers: ["answer4", "answer3", "answer2", "answer1"],
    solution: "answer3"
}]

var index = 0

function countDown() {
    timerEl.textContent = timeRemaining
    timeRemaining--
    if (timeRemaining === 0) {
        clearInterval(clockid)
        questionEl.classList.add("hide")
        initialEl.classList.remove("hide")
        initialsEl.classList.remove("hide")
    }
}

function startGame() {
    questionEl.classList.remove("hide")
    initialsEl.classList.add("hide")
    introEl.classList.add("hide")
    clockid = setInterval(countDown, 1000)
    displayQuestions()
}

function displayQuestions() {
    console.log(index)
    titleEl.textContent = question[index].title
    answer1El.textContent = question[index].answers[0]
    answer2El.textContent = question[index].answers[1]
    answer3El.textContent = question[index].answers[2]
    answer4El.textContent = question[index].answers[3]
}

function nextQuestion(event) {
    event.preventDefault()
    const useranswer = event.target.innerText;
    if (useranswer === question[index].solution) {
        alert("correct")
    }
    else {
        alert("wrong")
        timeRemaining -= 10
    }
    index++
    if (index < question.length)
        displayQuestions()
    else {
        clearInterval(clockid)
        questionEl.classList.add("hide")
        initialEl.classList.remove("hide")
        initialsEl.classList.remove("hide")
        finishQuiz()
    }

    function finishQuiz() {
        var section = document.querySelector("section");
        section.innerHTML = "";
        //score += secondsLeft;
        scoresEl.innerHTML=timeRemaining
    }

    }
    function getInitials() {
        var initial = document.createElement("input");
        initialEl.innerHTML = "";
        document.body.children[1].children[0].children[0].appendChild(initial);
        initialEl.addEventListener("input", function () {
            var initialEl = initial.value;
            initialEl = initial.toUpperCase();
            if (initialEl.length === 3) {
                highScore.push(score);
                storeScore(highscore);
            }
        });
    }

    function storeScore(highScore) {
        localStorage.setItem("highscore", JSON.stringify(highScore));
    }
    function resetScores() {
        localStorage.removeItem("highScores");
    }
        answer1El.addEventListener("click", nextQuestion)
        answer2El.addEventListener("click", nextQuestion)
        answer3El.addEventListener("click", nextQuestion)
        answer4El.addEventListener("click", nextQuestion)
        startEl.addEventListener("click", startGame)
    
