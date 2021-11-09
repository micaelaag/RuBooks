import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock,initial = 1,onAdd}) => {

    const [count, setCount] = useState(initial);

    const increment = () => {
        if(count < stock) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > 0)
        setCount(count - 1);
    }

    const confirm = () => {
        onAdd(count)
    }

    return ( 
        <div>

            <p>Cantidad: {count}</p>
            <button className = "agregar" onClick={increment}>+</button>
            <button className = "agregar" onClick={decrement}>-</button>
            
            <Link to={"/carrito"}><button className = "agregar botones" onClick={confirm}>Confirmar cantidad</button></Link>
        </div>
    );
}

export default ItemCount; 


