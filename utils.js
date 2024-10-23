function esPar(n) {
    return n % 2 === 0;
}

function calcularDescuento(precioOriginal, porcentajeDescuento) {
    if (precioOriginal <= 0) {
        throw new Error('El precio debe ser mayor a cero.');
    }
    if (porcentajeDescuento < 0 || porcentajeDescuento > 100) {
        throw new Error('El porcentaje de descuento debe estar entre 0 y 100.');
    }
    let descuento = precioOriginal * (porcentajeDescuento / 100);
    return +(precioOriginal - descuento).toFixed(2);
}

function generarId() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';
    for (let i = 0; i < 8; i++) {
        resultado += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return resultado;
}

module.exports = { esPar, calcularDescuento, generarId };
