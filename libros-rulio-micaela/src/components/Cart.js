import React, { useContext,useEffect } from 'react'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom';

function Cart() {

    
        const {carrito, eliminarProducto, vaciarCarrito, calcularTotal, cantidad, total} = useContext(CartContext);
    
        useEffect(() => {
        calcularTotal()
    }, []);

    return (
            <div className="contt">
            
            { 
                carrito.length === 0 
                ? 
                <div>
                    <h5>No ha efectuado ninguna compra</h5>
                    <Link to={'/'}>Volver al inicio </Link>
                </div> 
                : 
        <>
                <h4>La orden de compra realizada es la siguiente:</h4>

                  {carrito.map(function (item, index) {
                    return (
                      <div key={index} className="carrito">
                        <ul>
                            <img src={item.img} width="100px"/>
                            <li>{item.titulo}</li>
                            <li>$ {item.precio}</li>
                            <li>{item.cantidad}</li>
                            <button className="agregar" onClick={()=>{eliminarProducto(index)}}>X</button> 
                        </ul>
                      </div>
                    )
                  }
                  ) }
              <h3>Usted ha adquirido {cantidad} productos. Gracias por su compra</h3>
              <button className="agregar botones" onClick={vaciarCarrito}>Vaciar Carrito</button>
        </>
        }
              <h1>Total: $ {total}</h1>
          </div>
            ) }
  

export default Cart





