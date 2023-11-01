/**
 * Crea la imagen de la carta
 * @param {String} card 
 * @returns {HTMLImageElement} retorna la imagen de la carta
 */

export const createCard = (card) =>{
    if(!card) throw new Error('Se requiere una carta para dibujar el html');

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${ card }.png`; //3H, JD
    imgCard.classList.add('carta');
    
    return imgCard;
}