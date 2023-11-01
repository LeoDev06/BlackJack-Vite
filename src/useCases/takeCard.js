/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck es un arreglo de String
 * @returns {String} Retorna una carta dentro del deck
 */

export const takeCard = (deck) => {
    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    return carta;
}