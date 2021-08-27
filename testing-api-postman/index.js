const startQuiz = document.getElementById('startQuiz');

let category = null;
let difficulty = null;
let type = null;
let quantity = 1;
let urlApi = 'https://opentdb.com/api.php?amount=';


function getCategory() {
    category = document.getElementById('dropdownCategory').value;
}

function getDifficulty() {
    difficulty = document.querySelector('input[name="difficulty"]:checked').value;
}

function getType() {
    type = document.querySelector('input[name="type"]:checked').value;
}

function getQuantity() {
    quantity = document.getElementById('quantity').value;
}



// quiz maker 
startQuiz.addEventListener("click", () => {
    // get tag API of category
    getCategory();

    // get tag API of difficult
    getDifficulty();

    // get tag API of type
    getType();

    // get tag API of quantity
    getQuantity();

    // set url API 
    urlApi = `https://opentdb.com/api.php?amount=${quantity}`;

    if (category !== 'any') {
        urlApi += `&category=${category}`;
    }
    if (difficulty !== 'any') {
        urlApi += `&difficulty=${difficulty}`;
    }
    if (type !== 'any') {
        urlApi += `&type=${type}`;
    }

    sendApiRequest();
})

async function sendApiRequest() {
    const response = await fetch(urlApi);
    const data = await response.json();

    const question = document.getElementById('question');
    question.style.display = 'block';

    document.getElementById('answers-container').style.display = 'block';

    const answer1 = document.getElementById('answer1');
    const answer2 = document.getElementById('answer2');
    const answer3 = document.getElementById('answer3');
    const answer4 = document.getElementById('answer4');

    data.results.forEach(element => {
        question.innerHTML = element.question;
        const incorrectAnswers = element.incorrect_answers;
        answer1.innerHTML = incorrectAnswers[0];
        answer2.innerHTML = incorrectAnswers[1];
        answer3.innerHTML = incorrectAnswers[2];
        answer4.innerHTML = element.correct_answer;

        /*
         la risposta corretta è sempre la quarta;
         bisogna raccogliere le risposte, mescolare
         e gestirle insieme ai buttons:
         questo script NON FUNZIONA con type diverso da MULTIPLE

         CREARE DINAMICAMENTE IN BASE AL TIPO DI QUIZ
        */
    });

}