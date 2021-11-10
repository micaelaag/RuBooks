import React,{useContext, useEffect, useState} from 'react'
import { CartContext } from '../CartContext'
import {Link} from "react-router-dom";
function Carrito() {
    const {carrito, eliminarProducto, vaciarCarrito, calcularTotal, total, guardarNombre, guardarCorreo, guardarUsuario} = useContext(CartContext);
    useEffect(() => {
        calcularTotal()
    }, []);
    const [click, setClick]= useState(false);

    const agregarBoton = (e) =>{
        e.preventDefault()
        setClick(true)
    }
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
            <form className="contt">
                <label>Nombre</label>
                <input onChange= {guardarNombre} type="text" required></input>
                <label>Correo electronico</label>
                <input onChange= {guardarCorreo} type="email" required></input>
                <label>Confirmar correo electronico</label>
                <input type="email" required></input>
                <button id="enviar" type="submit" onClick={agregarBoton}>Listo!</button>
            </form>
            { click == true
                    ?   
            <Link to ="/cart"><button className="agregar botones" onClick={guardarUsuario}>Terminar mi compra</button></Link>
                    :
            <div></div>        
        }

        </div>
    )
}

export default Carrito
