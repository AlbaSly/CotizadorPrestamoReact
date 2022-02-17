import { Fragment, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import TotalPago from "./components/TotalPago";
import Mensaje from "./components/Mensaje";
import Spinner from "./components/Spinner/Spinner";

function App() {
  const [cantidad, cantidadSave] = useState(0);
  const [plazo, plazoSave] = useState(0);
  const [prestamoTotal, prestamoTotalSave] = useState(0);
  const [cargando, cargandoSave] = useState(false);

  let component;
  
  if (!prestamoTotal) {
    component = <Mensaje />;
  } else {
    component = <TotalPago
      prestamoTotal={prestamoTotal}
    />;
  }

  if (cargando) component = <Spinner />;

  return (
    <Fragment>
      <Header 
        titulo="Cotizador de Préstamos"
      />
      <div className="container">
        <Form 
          cantidad={cantidad}
          cantidadSave={cantidadSave}
          
          plazo={plazo}
          plazoSave={plazoSave}

          prestamoTotal={prestamoTotal}
          prestamoTotalSave={prestamoTotalSave}

          cargandoSave={cargandoSave}
        />
        <div className="mensajes">
          {component}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
