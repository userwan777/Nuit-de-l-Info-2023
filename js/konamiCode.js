const konamiCode = [
    'ArrowUp', 'ArrowUp',
    'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight',
    'ArrowLeft', 'ArrowRight',
    'b', 'a'
];


const userKeys = [];


document.addEventListener('keydown', (event) => {

    userKeys.push(event.key);


    if (userKeys.toString().indexOf(konamiCode) >= 0) {

        window.location.href = '../easter-egg/index.html';

        userKeys.length = 0;
    }
});


