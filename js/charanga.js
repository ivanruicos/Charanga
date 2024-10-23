document.addEventListener("DOMContentLoaded", iniciar, false);

function iniciar() {
    longMerchandising();
    popup();
}

function longMerchandising() {
    const merchandisingGrid = document.querySelector('.merchandising-grid');
    const merchandisingCards = document.querySelectorAll('.merchandising-card');

    console.log(merchandisingCards.length);

    if(merchandisingCards.length < 3){
        merchandisingGrid.style.gridTemplateColumns = `repeat(${merchandisingCards.length}, 1fr)`;
    }
}

function popup() {
    const merchandisingCards = document.querySelectorAll('.merchandising-card');
    const closeBtns = document.querySelectorAll('.close-btn');

    // Mostrar el pop-up cuando se haga clic en el div
    merchandisingCards.forEach(card => {
        card.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            modal.style.display = 'flex';
        })
    });

    // Cerrar el pop-up cuando se haga clic en la 'X'
    closeBtns.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.popup').style.display = 'none';
        })
    });

    // Cerrar el pop-up si se hace clic fuera del contenido del pop-up
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('popup')) {
            event.target.style.display = 'none';
        }
    });
}