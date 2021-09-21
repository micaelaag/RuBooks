//1)Me traigo la libreria React
import React from 'react';

//2)Me traigo la libreria ReactDOM
import ReactDOM from 'react-dom';

//3)Importo un componente
import App from './App';

import "./estilos.css"


//4)Renderizo el componente
ReactDOM.render(
    <App/>,
    document.getElementById("root")
)