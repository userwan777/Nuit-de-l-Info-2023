
const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const progressBar = document.getElementById('progress-bar');

function updateProgressBar(percentage) {

    // Mettre à jour la largeur de la barre de progression
    progressBar.style.width = percentage + '%';

    // Mettre à jour la couleur de la barre de progression
}

// Exemple d'utilisation pour mettre à jour la progression
// (vous pouvez appeler cette fonction avec le pourcentage de progression et la couleur souhaités)
updateProgressBar(10);

document.addEventListener('DOMContentLoaded', function () {
    const themeSwitch = document.querySelector('.theme-switch__checkbox');
    const body = document.querySelector('body');

    themeSwitch.addEventListener('change', function () {
      // Si le bouton est coché, active le thème sombre, sinon active le thème clair
      body.classList.toggle('dark-theme', themeSwitch.checked);
      body.classList.toggle('light-theme', !themeSwitch.checked);
    });
  });