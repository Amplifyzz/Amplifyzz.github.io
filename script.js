const form = document.getElementById("quiz");
form.addEventListener("submit", submitted);

function submitted(event) {
    event.preventDefault()
    const answers = {
        question1: document.querySelector('input[name="q1"]:checked').value,
        
    }
    display(answers);
}

function submitted(event) {
    event.preventDefault()
    const answers = {
        question2: document.querySelector('input[name="q2"]:checked').value,
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
        result.textContent = "correct";
     } else if (answers.question1 === "no") {
        result.textContent = "incorrect"
        
     }
    quizSection.appendChild(result);

    if (answers.question2 === "no") {
        result.textContent = "incorrect";
    } else if (answers.question2 === "yes") {
        result.textContent = "correct"
      
    }
    
}


