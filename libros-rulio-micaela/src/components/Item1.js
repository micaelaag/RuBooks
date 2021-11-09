import {Link} from "react-router-dom";


const Item1 = (props) => { 
    return (
        <div>
            <div className="contLibros">
                <img src={props.imgUrl} height="200px"/>
                <h3>
                    {props.titulo}
                </h3>
                <h2>
                    $ {props.precio}
                </h2>
                <p>
                    {props.autor}
                </p>
                
            <Link to ={"/detalles/"+ props.id} className ="agregar botones">Ver detalle de producto</Link>
            </div>

        </div>
    );
}

export default Item1;
