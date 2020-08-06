var currentQuestion = 0;
var currentScore = 0;
var currentTime = 20;
var counterTime;
var startContainer = document.getElementById("container");
var quizContainer = document.getElementById("quiz");
var questionContainer = document.getElementById("questions");
var resultsContainer = document.getElementById("results");
var scoreContainer = document.getElementById("score");

function startQuiz() {
  startContainer.setAttribute("class", "hide");
  quizContainer.removeAttribute("class");
  counterTime = setInterval(function () {
    currentTime = currentTime - 1;
    scoreContainer.innerHTML = currentTime + "s";
    if (currentTime < 0) {
      clearInterval(counterTime);
      scoreContainer.innerHTML = "No Time Left Sorry";
    }
  }, 1000);
  showCurrentQuestion();
}

function checkAnswer(event) {
  var answer = event.target.innerText;

  var question = questions[currentQuestion];

  if (answer === question.answer) {
    alert("Correct!");
  } else {
    currentTime = currentTime - 5;
    alert("Wrong!");
  }
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    finishQuiz();
  } else {
    showCurrentQuestion();
  }
}

function showScore() {}

function finishQuiz() {
  clearInterval(interval);
}
var questions = [{
    question: "What is my favorite area in Miami?",
    options: ["South Beach", "Hialeah", "Doral", "Kendall"],
    answer: "Doral",
  },
  {
    question: "In what month am I born in?",
    options: ["January", "November", "June", "October"],
    answer: "October",
  },
  {
    question: "What is my favorite food?",
    options: [
      "Haitian Specialty Griot",
      "Pizza",
      "Alfredo Pasta",
      "Ramen Noodles",
    ],
    answer: "Haitian Specialty Griot",
  },
  {
    question: "What is the best city in the U.S",
    options: ["Los Angeles", "New York", "Miami", "Atlanta"],
    answer: "Miami",
  },
];

function showCurrentQuestion() {
  var question = questions[currentQuestion];
  questionContainer.innerHTML = "";

  var questionTitle = document.createElement("h1");
  questionTitle.innerText = question.question;
  questionContainer.appendChild(questionTitle);

  var optionsList = document.createElement("ul");

  for (var i = 0; i < question.options.length; i++) {
    var questionLi = document.createElement("li");
    var button = document.createElement("button");
    button.addEventListener("click", checkAnswer);
    button.innerText = question.options[i];
    questionLi.appendChild(button);
    optionsList.appendChild(questionLi);
  }
  questionContainer.appendChild(optionsList);
}

