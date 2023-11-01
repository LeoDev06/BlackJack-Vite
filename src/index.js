import {createDeck, takeCard, valueCard, createCard, computerShift} from './useCases/index'
/*
 ! 2C = Clubs
 ! 2D = Diamonds
 ! 2H = Hearts
 ! 2S = Spades
*/

let deck               = [];
const tiposCartas      = ['C','D','H','S'];
const cartasEspeciales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador     = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small');

//Creando un nuevo deck
deck = createDeck(tiposCartas, cartasEspeciales);

// Eventos
btnPedir.addEventListener('click', () => {
    const card = takeCard(deck);
    
    puntosJugador = puntosJugador + valueCard( card );
    puntosHTML[0].innerText = puntosJugador;
    
    // TODO: Crea la imagen de la carta en el html
    const imgCard = createCard(card);
    divCartasJugador.append( imgCard );

    if ( puntosJugador > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        computerShift( puntosJugador, puntosHTML[1], divCartasComputadora, deck);

    } else if ( puntosJugador === 21 ) {
        console.warn('21, genial!');
        btnPedir.disabled   = true;
        btnDetener.disabled = true;
        computerShift( puntosJugador, puntosHTML[1], divCartasComputadora, deck);
    }
});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled   = true;
    btnDetener.disabled = true;

    computerShift( puntosJugador, puntosHTML[1], divCartasComputadora, deck);
});

btnNuevo.addEventListener('click', () => {
    console.clear();
    deck = [];
    deck = createDeck(tiposCartas, cartasEspeciales);

    puntosJugador     = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled   = false;
    btnDetener.disabled = false;
});