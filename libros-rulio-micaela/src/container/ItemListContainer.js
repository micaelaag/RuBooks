import ItemList from "../components/ItemList";
import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import { firestore } from "../components/firebase"




const ItemListContainer = () => {

    const [items,setItems] = useState([]);
    const {idCategoria} = useParams()
    console.log(idCategoria)
const obtenerProductos = () => {
    const db = firestore
    const collection = db.collection("productos")
    const query = collection.get()

query.then((resultado)=>{
        const documentos = resultado.docs
        const array_final_de_productos = []
        documentos.forEach(producto=>{
            const id = producto.id
            const el_resto = producto.data()
            const producto_final = {id,...el_resto}
            array_final_de_productos.push(producto_final)
        })
        setItems(array_final_de_productos)
    })
    .catch(error=>{
        console.log(error)
    })
}

const obtenerCategoria = () =>{
    const db = firestore
    const collection = db.collection("productos")    
    const query = collection.where("idCategoria","==", Number(idCategoria)).get();
    
    query.then((resultado)=>{
            const documentos = resultado.docs
            console.log(documentos)
            const array_final_de_productos = []
            documentos.forEach(producto=>{
                const id = producto.id
                const el_resto = producto.data()
                const producto_final = {id,...el_resto}

                console.log(producto_final)
                array_final_de_productos.push(producto_final)
                console.log(array_final_de_productos)
            });
            setItems(array_final_de_productos)
        
            })
    .catch(error=>{
        console.log(error)
    })

    
}



    useEffect(() => {
        if(idCategoria) {
            obtenerCategoria();
        } else {
            obtenerProductos();
        }
    },[idCategoria])
        
    
    return  (
            <div className = "contenedor">
                <div id = "ingreso">
                    <h2>Bienvenido/a</h2>
                </div>
                <div className = "contenedorLibros">
                    <ItemList info = {items}/> 
                </div>
            </div>
);

}

export default ItemListContainer

