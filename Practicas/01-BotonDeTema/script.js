'use strict';
window.addEventListener('load', ()=> {

    let darkModeButton = document.getElementById('darkmode');
    let lightModeButton = document.getElementById('lightmode');
    let body = document.querySelector('body');

    function activarDarkMode() {
        body.classList.remove('lightmode');
        body.classList.add('darkmode');
    }

    function activarlightMode() {
        body.classList.remove('darkmode');
        body.classList.add('lightmode');
    }

    // Aplica el modo guardado al cargar
    if(localStorage.getItem('darkMode') === 'true') {
        activarDarkMode();
    } else {
        activarlightMode();
    }

    // Agrega ambos listeners SIEMPRE
    darkModeButton.addEventListener('click', () => {
        activarDarkMode();
        localStorage.setItem('darkMode','true');
    });

    lightModeButton.addEventListener('click', () => {
        activarlightMode();
        localStorage.setItem('darkMode','false');
    });

});
