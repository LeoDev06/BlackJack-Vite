import {takeCard, valueCard, createCard, winnerPlayer} from './'
/**
 * Crea la carta en el html
 * @param {Number} puntosMinimos Puntos de referencia para que gane la computadora 
 * @param {HTMLElement} puntosHTML elemento html que muestra los puntos
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar las cartas
 * @param {Array<String>} deck 
 */

export const computerShift = ( puntosMinimos, puntosHTML, divCartasComputadora, deck ) => {
    if(!puntosMinimos) throw new Error('Se requieren los puntos minimos');
    let puntosComputadora = 0;

    do {
        const card = takeCard(deck);
        puntosComputadora = puntosComputadora + valueCard(card);
        puntosHTML.innerText = puntosComputadora;
        
        // TODO: Crea la imagen de la carta en el html
        const imgCard = createCard(card);
        divCartasComputadora.append( imgCard );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );
    
    //TODO: saber que jugador gana la parida
    setTimeout(() => {
        winnerPlayer(puntosComputadora, puntosMinimos);
    }, 400);
}