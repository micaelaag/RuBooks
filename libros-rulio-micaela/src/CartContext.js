import React, {createContext,useState} from "react"

export const CartContext = createContext();
export const CartProvider = (props)=>{
    const [carrito, setCarrito]= useState([]);

    const [total,setTotal] = useState(0)
    const [cantidad,setCantidad] = useState(0)
    let cantidades = cantidad

    function agregar(prod,cantidad){
        const prodSeleccionado = {
            "id": prod.id,
            "img":prod.url,
            "precio":prod.precio,
            "titulo": prod.titulo,
            "cantidad": cantidad
        }


        const temp = carrito;
        temp.push(prodSeleccionado)    
        setCarrito(temp)    
        console.log(carrito)
        
        if (prodSeleccionado.id in temp){
                const buscarProd = temp.find(producto =>producto.id == prodSeleccionado.id)
                prodSeleccionado.cantidad = buscarProd.cantidad + prodSeleccionado.cantidad
                temp.splice(buscarProd, 1)
                setCarrito(temp)
                console.log("------------------------------")
                console.log(carrito)
                console.log("------------------------------")

        }
        
        
        let sumarCantidades = cantidades + cantidad
        console.log(sumarCantidades)
        setCantidad(sumarCantidades)
    }   
    const calcularTotal = () =>{

        let tot = 0
        carrito.map((item)=>{
            tot = tot + (item.precio * item.cantidad)
        });
        setTotal(tot)
    }
    
    
    const eliminarProducto = (index) => {
        const temp = carrito;
        
        const restar = temp[index] 
        let restarCantidades = cantidades - restar.cantidad
        console.log(restarCantidades)
        setCantidad(restarCantidades)
        temp.splice(index, 1);
        setCarrito(temp);
        console.log(temp)
        calcularTotal()
        
    }
    
    const vaciarCarrito = () => {
        console.log("Vaciar el carrito")
        setCarrito([]);
        setTotal(0)
        setCantidad(0)
    }

const terminarCompra = () => {
    console.log("Procesando compra")
}

const cantProductos = () =>{
    const cantProd = 0;
    carrito.map(item => item.cantidad + cantProd)
    console.log(cantProd)
}


const valor_del_contexto = {
    carrito,
    cantidad,
    agregar,
    eliminarProducto,
    vaciarCarrito,
    calcularTotal,
    total,
    terminarCompra,
    cantProductos
  }
    
    return (
        <CartContext.Provider value={valor_del_contexto}>
            {props.children}
        </CartContext.Provider>
    )
}