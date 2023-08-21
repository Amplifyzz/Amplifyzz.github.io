const form = document. getElementById("quiz");
form.addEventListener("submit", submitted);

function submitted(event) {
    event.preventDefault()
    const answers = (
        question1: document. querySelector('input[name="q1"]:checked').value,
        question2: document. querySelector('input[name="q2"]:checked').value
    )
    const results = calculate(answers);
    display(results);
}

function calculate(answers) {
    if (answers.question1 === "yes") {
        return "Thank you for reading";
     } else if (answers.question1 === "no") {
        return "You should read";
     }
}


function display(results) {
    const quizSection = document.getElementById("quiz wrapper");
    quizSection.innerHTML = "";
    const answerHeader = document.createElement("h1");
    answerHeader.textContent = "Your results are:";
    quizSection.appendChild(answerHeader);
    const result = document.createElement('p');
    result.textContent = results;
    quizSection.appendChild(result);
}

