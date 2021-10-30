import ItemDetail from "../components/ItemDetail";
import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import { firestore } from "../components/firebase"



const ItemDetailContainer = () => {
    const [itemsDetalle,setItems] = useState({});
    
    const {id} = useParams();
    console.log("soy params " + id)
        

    useEffect(() => {

        const db = firestore
    const collection = db.collection("productos")    
    const query = collection.doc(id).get();
    
    query.then((resultado)=>{
                const id = resultado.id
                const el_resto = resultado.data()
                const producto_final = {id,...el_resto}

                console.log(producto_final)
                setItems(producto_final)
            })
        
            
    .catch(error=>{
        console.log(error)
    })
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