/**
 * Obtienen el valor de la carta
 * @param {String} card carta 
 * @returns {Number} valor numerico de la carta
 */

export const valueCard = (card) => {

    const value = card.substring(0, card.length - 1);
    return ( isNaN( value ) ) ? 
            ( value === 'A' ) ? 11 : 10
            : value * 1;
}