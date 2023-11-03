/**
 * Define quien es el ganador de la partida
 * @param {Number} puntosComputadora 
 * @param {Number} puntosMinimos 
 */
export const winnerPlayer = (puntosComputadora, puntosMinimos) => {
    if(!puntosMinimos) throw new Error('Los puntos minimos son requeridos');
    if(!puntosComputadora) throw new Error('Los puntos de la computadora son requeridos');
    
    if( puntosComputadora === puntosMinimos ) {
        alert('Nadie gana :(');
    } else if ( puntosMinimos > 21 ) {
        alert('Computadora gana')
    } else if( puntosComputadora > 21 ) {
        alert('Jugador Gana');
    } else {
        alert('Computadora Gana')
    }
}
