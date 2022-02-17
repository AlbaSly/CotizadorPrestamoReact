import { useState } from "react";

import { calcularTotal } from "../helpers/helpers";

const Form = (props) => {
    const {cantidad, cantidadSave, plazo, plazoSave, prestamoTotal, prestamoTotalSave, cargandoSave} = props;

    const [error, errorSave] = useState(false);

    const calcularPrestamo = (ev) => {
        ev.preventDefault();

        if (!validarInputs()) {
            errorSave(true);
            return;
        }
        errorSave(false);

        cargandoSave(true);

        setTimeout(() => {
            prestamoTotalSave(calcularTotal(cantidad, plazo));
            cargandoSave(false);
        }, 2500);
    }

    const validarInputs = () => {
        return cantidad && plazo;
    }

    return (
        <form onSubmit={calcularPrestamo}>
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input 
                        className="u-full-width" 
                        type="number"
                        placeholder="Ejemplo: 3000"
                        onChange={ev => cantidadSave(parseInt(ev.target.value))}
                    />
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select className="u-full-width" 
                        onChange={ev => plazoSave(parseInt(ev.target.value))}>
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">25 meses</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <input
                    type="submit"
                    value="calcular"
                    className="button-primary u-full-width"
                />
            </div>

            { (error) ? <p className="error">Ambos campos son obligatorios</p> : null}
        </form>
    );
}

export default Form;