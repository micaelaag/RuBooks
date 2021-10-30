import React, { useContext,useEffect } from 'react'
import { CartContext } from '../CartContext'
import { Link } from 'react-router-dom';

function Cart() {

    
        const {carrito, eliminarProducto, vaciarCarrito, calcularTotal, cantidad, total} = useContext(CartContext);
    
        useEffect(() => {
        calcularTotal()
    }, []);

    return (
            <div>
                <h4>La orden de compra realizada es la siguiente:</h4>
            
            { 
                carrito.length === 0 
                ? 
                <div>
                    <h6>No ha efectuado ninguna compra</h6>
                    <Link to={'/'}>Volver al inicio </Link>
                </div> 
                : 
        <>

                  {carrito.map(function (item, index) {
                    return (
                      <div key={index}>
                        <ul>
                            <img src={item.img}/>
                            <li>{item.titulo}</li>
                            <li>{item.precio}</li>
                            <button onClick={()=>{eliminarProducto(index)}}>X</button> 
                        </ul>
                      </div>
                    )
                  }
                  ) }
        </>
        }
              <h1>Total: $ {total}</h1>
              <h3>Usted ha adquirido {cantidad} productos</h3>
              <button onClick={vaciarCarrito}>Vaciar Carrito</button>
          </div>
            ) }
  

export default Cart





