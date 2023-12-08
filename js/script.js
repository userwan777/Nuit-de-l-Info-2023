var questionsData;
var questionNumber = 0;

const themeSwitch = document.querySelector('.theme-switch__checkbox');
const body = document.querySelector('body');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const answersList = document.getElementById('answers-list');
const progressBar = document.getElementById('progress-bar');
const buttonContainer = document.getElementById('button-container');

window.onload = () => { init(); }

function init(){
    for(let i = 0 ; i < buttonContainer.children.length ; i++){
        buttonContainer.children[i].addEventListener('click',() => {
            chooseAnswer(i);
        });
    }

    themeSwitch.addEventListener('change', function () {
        // Si le bouton est coché, active le thème sombre, sinon active le thème clair
        body.classList.toggle('dark-theme', themeSwitch.checked);
        body.classList.toggle('light-theme', !themeSwitch.checked);
    });

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

    var sansPourcentage = parseFloat(progressBar.style.width) || 0;

    sansPourcentage += parseFloat(percentage);

    sansPourcentage = Math.min(100, Math.max(0, sansPourcentage));

    progressBar.style.width = sansPourcentage + '%';

    // Mettre à jour la couleur de la barre de progression
}

// Exemple d'utilisation pour mettre à jour la progression
// (vous pouvez appeler cette fonction avec le pourcentage de progression et la couleur souhaités)


function chooseAnswer(number){
    updateProgressBar(6.666667);
    displayNextQuestion();
}

function displayNextQuestion(){
    questionText.textContent = questionsData.questions[questionNumber].text;
    for(let i = 0 ; i < answersList.children.length ; i++){
        answersList.children[i].innerHTML = '<h3>' + questionsData.questions[questionNumber].answers[i].text + '</h3>';
    }
    questionNumber += 1;
}

//function updateEarthState(){}
