import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";


const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to ="/">Inicio</Link></li>
                <li><Link to = "/Productos">Productos</Link></li>
                <li><Link to = "/Recomendaciones">Recomendaciones</Link></li>
                <li><Link to = "/Mediosdepago">Medios de Pago</Link></li>
                <li><Link to = "/Contacto">Contacto</Link></li>
                <CartWidget/>
            </ul>
        </nav>
    );
}

export default Nav;