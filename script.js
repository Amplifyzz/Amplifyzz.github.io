const form = document.getElementById("quiz");
form.addEventListener("submit", submitted);

function submitted(event) {
    event.preventDefault()
    const answers = {
        question1: document.querySelector('input[name="q1"]:checked').value,
        question2: document.querySelector('input[name="q2"]:checked').value
    }
    display(answers);
}
function display(answers) {
    const quizSection = document.getElementById("quiz-wrapper");
    quizSection.innerHTML = "";
    const answerHeader = document.createElement("h1");
    answerHeader.textContent = "Your results are:";
    quizSection.appendChild(answerHeader);
    const result = document.createElement('p');
    if (answers.question1 === "yes") {
        result.textContent = "Question 1: correct";
     } else if (answers.question1 === "no") {
        result.textContent = "Question 1: incorrect"
        
     }
    quizSection.appendChild(result);
const result2 = document.createElement ('p');
    if (answers.question2 === "no") {
        result2.textContent = "Question 1: incorrect";
    } else if (answers.question2 === "yes") {
        result2.textContent = "Question 1: correct";
      
    }
    quizSection.appendChild(result);
    quizSection.appendChild(result2);
}


