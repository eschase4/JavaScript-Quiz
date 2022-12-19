var testArea = $("#test-area")
var startButton = $("#quizStart")
var firstQ = $("#firstQ")
var answer = $(".btn")

var question1 = $("#question1")
var question2 = $("#question2")

var question = $(".question")

console.log(question[0])
testArea.hide()
question1.hide()
question2.hide()

function startTest() {
    startButton.on("click", function() {
    startButton.hide()
    testArea.show()
    question1.show()
    }
    )}

startTest()

function nextQuestion() {
    answer.on("click", function() {
    for (i = 0; i < question.length; i++) {
        question[i].hide()
        question[i + 1].show()
    }})}

nextQuestion();

// function nextQuestion() {
//     answer.on("click", function(){
//         question1.hide()
//         question2.show()
//     })
// }

// nextQuestion()

// function nextQuestion() {
//     answer.on("click", function(){
//         question2.hide()
//         question3.show()
//     })
// }

// nextQuestion()

// function nextQuestion() {
//     answer.on("click", function(){
//         question3.hide()
//         question4.show()
//     })
// }

// nextQuestion()