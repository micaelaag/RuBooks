import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";


const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to ="/">Inicio</Link></li>
                <li className="desplegar"><Link to = "/Productos">Productos</Link>
                    <ul className="desplegable">
                        <li  className="subMenu"><Link to = "/Productos/categoria/1">Categoria 1 - Clasicos</Link></li>
                        <li className="subMenu"><Link to = "/Productos/categoria/2">Categoria 2 - Terror</Link></li>
                    </ul>
                </li>
                <li><Link to = "/Recomendaciones">Recomendaciones</Link></li>
                <li><Link to = "/Mediosdepago">Medios de Pago</Link></li>
                <li><Link to = "/Contacto">Contacto</Link></li>
                <CartWidget/>
            </ul>
        </nav>
    );
}

export default Nav;