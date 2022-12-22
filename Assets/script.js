var begin = document.getElementById('begin')
const Questions = [{
    id: 0,
    q: "Bootstrap is an API that provides _______ to websites",
    a: [{ text: "Python", isCorrect: false },
        { text: "CSS", isCorrect: true },
        { text: "HTML", isCorrect: false },
        { text: "JavaScript", isCorrect: false }
    ]

},
{
    id: 1,
    q: "Which of the following methods replaces 'addEventListener' while using jQuery?",
    a: [{ text: "begin", isCorrect: false, isSelected: false },
        { text: "activate", isCorrect: false },
        { text: "startEvent", isCorrect: false },
        { text: "on", isCorrect: true }
    ]

},
{
    id: 2,
    q: "'Boolean' values represent what kind of data?",
    a: [{ text: "Different programming languages", isCorrect: false },
        { text: "Large Numbers", isCorrect: false },
        { text: "True/False", isCorrect: true },
        { text: "Ghost Activity", isCorrect: false }
    ]

},
{
    id: 2,
    q: "We use _____ to make our websites look nice and polished.",
    a: [{ text: "Microsoft Paint", isCorrect: false },
        { text: "Node", isCorrect: false },
        { text: "CSS", isCorrect: true },
        { text: "JavaScript", isCorrect: false }
    ]

}

]

var start = true


function iterate(id) {

   
    

var result = document.getElementsByClassName("result");
result[0].innerText = "";

const question = document.getElementById("question");


question.innerText = Questions[id].q;


const op1 = document.getElementById('op1');
const op2 = document.getElementById('op2');
const op3 = document.getElementById('op3');
const op4 = document.getElementById('op4');



op1.innerText = Questions[id].a[0].text;
op2.innerText = Questions[id].a[1].text;
op3.innerText = Questions[id].a[2].text;
op4.innerText = Questions[id].a[3].text;


op1.value = Questions[id].a[0].isCorrect;
op2.value = Questions[id].a[1].isCorrect;
op3.value = Questions[id].a[2].isCorrect;
op4.value = Questions[id].a[3].isCorrect;

var selected = "";

const evaluate = document.getElementsByClassName("evaluate");

evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
        result[0].innerHTML = "True";
        result[0].style.color = "green";
    } else {
        result[0].innerHTML = "False";
        result[0].style.color = "red";
    }
})
}

if (start) {
iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;


next.addEventListener("click", () => {
start = false;
if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
}

})

var timeEl = document.getElementById("timer");

var secondsLeft = 60;

function timeLeft() { 
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "You have " + secondsLeft + " seconds remaining";
  
      if(secondsLeft === 0) {
   
        clearInterval(timerInterval);
        
        sendMessage();
      }
  
    }, 1000);
}

timeLeft()