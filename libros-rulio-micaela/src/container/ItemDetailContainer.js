import ItemDetail from "../components/ItemDetail";
import React, {useState,useEffect} from 'react';
import {productos} from "../components/productos";
import {useParams} from "react-router-dom";



const ItemDetailContainer = () => {
    const [itemsDetalle,setItems] = useState({});
    
    const {id} = useParams();
    console.log("soy params " + id)
        

    useEffect(() => {

        const promesa = new Promise((resolve,reject) => {
            setTimeout(() => {
                const producto = productos.find(producto => producto.id == id)
                resolve(producto)
                
            },2000)
        })

        promesa.then(producto => setItems(producto))

    },[id])

    return  (
        <>
        {itemsDetalle ?
            <>
            <ItemDetail info={itemsDetalle} />
            </>
            :
            <div>Cargando</div>
        }
        </>
);
}

export default ItemDetailContainer