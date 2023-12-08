var questionsData;
var questionNumber = 0;
var score = 30;

const themeSwitch = document.querySelector('.theme-switch__checkbox');
const body = document.querySelector('body');
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const answersList = document.getElementById('answers-list');
const progressBar = document.getElementById('progress-bar');
const buttonContainer = document.getElementById('button-container');
const planetImage = document.getElementById('planet-image');

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

    themeSwitch.checked = false;

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
updateProgressBar(10);

function chooseAnswer(number){
    score += questionsData.questions[questionNumber].answers[number].Etat[0].Point;
    updateEarthState();
    displayNextQuestion();
}

function displayNextQuestion(){
    questionText.textContent = questionsData.questions[questionNumber].text;
    for(let i = 0 ; i < answersList.children.length ; i++){
        answersList.children[i].innerHTML = '<h3>' + questionsData.questions[questionNumber].answers[i].text + '</h3>';
    }
    questionNumber += 1;
    if(questionNumber == questionsData.questions.length){
        alert("Quiz terminé !");
    }
}

function updateEarthState(){
    if(score >= 25){ planetImage.src = "../images/harmonie_retrouvee.png";}
    else if(score >= 20){ planetImage.src = "../images/stabilite_croissante.png"; }
    else if(score >= 15){ planetImage.src = "../images/changement_encourageant.png"; }
    else if(score >= 10){ planetImage.src = "../images/adaptation_necessaire.png"; }
    else if(score >= 1){ planetImage.src = "../images/tension_accrue.png"; }
    else{ planetImage.src = "../images/sombre_desolation.png"; }
}
