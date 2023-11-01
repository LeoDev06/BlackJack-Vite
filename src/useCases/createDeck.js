import _ from 'underscore';

//JSDoc Comments

/**
 * Esta función crea un nuevo mazo de cartas
 * @param {Array<String>} tiposCartas Ejemplo: ['C','D','H','S'];
 * @param {Array<String>} cartasEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<String>}
 */

export const createDeck = (tiposCartas, cartasEspeciales) => {
    
    if(!tiposCartas || tiposCartas.length === 0) 
        throw new Error('Tipos de carta es obligatorio');

    if(!cartasEspeciales || cartasEspeciales.length === 0) 
        throw new Error('Las cartas especiales son obligatorias');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCartas) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCartas ) {
        for( let esp of cartasEspeciales ) {
            deck.push( esp + tipo);
        }
    }

    deck = _.shuffle( deck );
    return deck;
}