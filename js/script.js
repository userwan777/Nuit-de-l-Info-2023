var questionsData;
var questionNumber = 0;

const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const answersList = document.getElementById('answers-list');
const progressBar = document.getElementById('progress-bar');

const buttonContainer = document.getElementById('button-container');

//const btnMode = document.getElementById('...');

window.onload = () => { init(); }

function init(){
    for(let i = 0 ; i < buttonContainer.children.length ; i++){
        buttonContainer.children[i].addEventListener('click',() => {
            chooseAnswer(i);
        });
    }

    //btnMode.addEventListener('click',() => {});

    fetch('../json/data.json')
        .then(response => response.json())
        .then(data => {
            questionsData = data;
            displayNextQuestion();
        })
        .catch(error => {
            console.error('Erreur lors du chargement du fichier JSON', error);
        });
}

function updateProgressBar(percentage) {

    // Mettre à jour la largeur de la barre de progression
    progressBar.style.width = percentage + '%';

    // Mettre à jour la couleur de la barre de progression
}

// Exemple d'utilisation pour mettre à jour la progression
// (vous pouvez appeler cette fonction avec le pourcentage de progression et la couleur souhaités)
updateProgressBar(30);

function chooseAnswer(number){
    displayNextQuestion();
}

function displayNextQuestion(){
    questionText.textContent = questionsData.questions[questionNumber].text;
    for(let i = 0 ; i < answersList.children.length ; i++){
        answersList.children[i].innerHTML = '<h3>' + questionsData.questions[questionNumber].answers[i].text + '</h3>';
    }
    questionNumber += 1;
}
//function changeMode(){}
//function updateEarthState(){}
