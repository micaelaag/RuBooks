import {Link} from "react-router-dom";
import {useContext} from 'react'
import { CartContext } from "../CartContext"


const CartWidget = () => {
    const {cantidad, total} = useContext(CartContext)
    

    var style = {};
if ((cantidad  || total) == 0) {
    style.display = 'none'
}

return (    
<div style={style}>
    <Link to = "/carrito"><i className = "material-icons">shopping_cart</i><h6>{cantidad}</h6></Link>
    
</div>
)
            
    

}


export default CartWidget
