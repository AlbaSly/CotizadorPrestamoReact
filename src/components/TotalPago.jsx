const TotalPago = (props) => {
    const {prestamoTotal:{
        total,
        totalCantidad,
        totalPlazo,
        cantidad,
        plazo
    }} = props;
    return (
        <div className="u-full-width resultado"> 
            <h2>Resumen</h2>
            <p>Prestamo solicitado: ${cantidad} = ${totalCantidad}</p>
            <p>Plazo de pago: {plazo} meses = ${totalPlazo}</p>
            <p>Total a pagar: ${total}</p>
            <p>Realizando pagos mensuales de ${(total/plazo).toFixed(2)}</p>
        </div>
    );
}

export default TotalPago;