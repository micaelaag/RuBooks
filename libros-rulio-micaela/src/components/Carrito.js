import React,{useContext, useEffect} from 'react'
import { CartContext } from '../CartContext'
import {Link} from "react-router-dom";
function Carrito() {
    const {carrito, eliminarProducto, vaciarCarrito, calcularTotal, total, terminarCompra, cantidad} = useContext(CartContext);
    useEffect(() => {
        calcularTotal()
    }, []);
  
    return (
        <div className="contt">   
            <h3>Productos seleccionados</h3>
            <div>
                {carrito.map((item, index)=>{
                    return(
                        <ul key={index}>
                            <img src={item.img} height="100px"/>
                            <li>{item.titulo}</li>
                            <li>$ {item.precio}</li>
                            <li>{item.cantidad}</li>
                            <button onClick={()=>{eliminarProducto(index)}}>X</button>
                        
                        </ul>
                    )
                })}
                <h1>Total: $ {total}</h1>
            </div>
            <button className="agregar botones" onClick={vaciarCarrito}>Vaciar Carrito</button>
            <Link to ="/cart"><button className="agregar botones" onClick={terminarCompra}>Terminar mi compra</button></Link>


        </div>
    )
}

export default Carrito
