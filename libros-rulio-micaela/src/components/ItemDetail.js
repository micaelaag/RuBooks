import React, {useContext } from 'react';
import ItemCount from "./ItemCount";
import { CartContext } from "../CartContext"



const ItemDetail = ({info}) => {
    const {agregar} = useContext(CartContext)

    const onAdd = (cantidad) => {
        agregar(info,cantidad)
    }
    return (
        <div id = "contDetails">
            <div>
                <img src={info.img} height="250px"/>
                <h3>
                    {info.titulo}
                </h3>
                <h2>
                    {info.precio}
                </h2>
                <p>
                    {info.detalle}
                </p>
            </div>
            <p>Stock restante: {info.stock}</p>
            <ItemCount stock={info.stock} onAdd={onAdd} />
        </div>
    );
}

export default ItemDetail;


