//const data = JSON.parse("...");

const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const progressBar = document.getElementById('progress-bar');

const btnAnswer1 = document.getElementById('button1');
const btnAnswer2 = document.getElementById('button2');
const btnAnswer3 = document.getElementById('button3');

const btnMode = document.getElementById('...');

window.onload = () => { init(); }

function init(){
    btnAnswer1.addEventListener('click',() => {});
    btnAnswer2.addEventListener('click',() => {});
    btnAnswer3.addEventListener('click',() => {});

    btnMode.addEventListener('click',() => {});
}

function updateProgressBar(percentage) {

    // Mettre à jour la largeur de la barre de progression
    progressBar.style.width = percentage + '%';

    // Mettre à jour la couleur de la barre de progression
}

// Exemple d'utilisation pour mettre à jour la progression
// (vous pouvez appeler cette fonction avec le pourcentage de progression et la couleur souhaités)
updateProgressBar(100);