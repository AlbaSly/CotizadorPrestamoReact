export const calcularTotal = (cantidad, plazo) => {
    let porcentajeCantidad;
    let porcentajePlazo;
    //cantidad
    if (cantidad > 10000) porcentajeCantidad = .10;
    if (cantidad > 5000 && cantidad <= 10000) porcentajeCantidad = .15;
    if (cantidad > 1000 && cantidad <= 5000) porcentajeCantidad = .20;
    if (cantidad > 0 && cantidad <= 1000) porcentajeCantidad = .25;
    //plazo
    if (plazo === 24) porcentajePlazo = .5;
    if (plazo === 12) porcentajePlazo = .10;
    if (plazo === 6) porcentajePlazo = .15;
    if (plazo === 3) porcentajePlazo = .20;

    const total = (cantidad + (cantidad * porcentajeCantidad) + (cantidad * porcentajePlazo)).toFixed(2);
    const totalPlazo = (cantidad * porcentajePlazo).toFixed(2);
    const totalCantidad = (cantidad * porcentajeCantidad).toFixed(2);

    return {
        total,
        totalPlazo,
        totalCantidad,
        cantidad,
        plazo
    }
}