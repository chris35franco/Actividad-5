const { esPar, calcularDescuento, generarId } = require('./utils');

test('Verificar si los números son pares o impares', () => {
    expect(esPar(4)).toBe(true);
    expect(esPar(7)).toBe(false);
    expect(esPar(0)).toBe(true);
    expect(esPar(-2)).toBe(true);
});

test('Calcular el descuento correctamente', () => {
    expect(calcularDescuento(100, 20)).toBe(80);
    expect(calcularDescuento(200, 50)).toBe(100);
    expect(calcularDescuento(1000, 15)).toBe(850);
});

test('Manejar precio menor o igual a cero', () => {
    expect(() => calcularDescuento(0, 10)).toThrow('El precio debe ser mayor a cero.');
    expect(() => calcularDescuento(-50, 20)).toThrow('El precio debe ser mayor a cero.');
});

test('Manejar porcentaje de descuento inválido', () => {
    expect(() => calcularDescuento(100, -10)).toThrow('El porcentaje de descuento debe estar entre 0 y 100.');
    expect(() => calcularDescuento(100, 150)).toThrow('El porcentaje de descuento debe estar entre 0 y 100.');
});

test('Generar un ID único alfanumérico de 8 caracteres', () => {
    const idsGenerados = new Set();
    
    for (let i = 0; i < 100; i++) {
        const id = generarId();
        expect(id.length).toBe(8);
        expect(/^[A-Za-z0-9]+$/.test(id)).toBe(true);
        expect(idsGenerados.has(id)).toBe(false);
        idsGenerados.add(id);
        expect(/\d/.test(id)).toBe(true);
        expect(/[A-Za-z]/.test(id)).toBe(true);
    }
});

