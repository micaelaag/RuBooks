import ItemList from "../components/ItemList";
import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import {productos} from "../../src/components/productos";



const ItemListContainer = () => {

    const [items,setItems] = useState([]);
    const {idCategoria} = useParams()
    useEffect(() => {
        if(idCategoria){
            const promesa = new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(productos.filter(producto => producto.idCategoria == idCategoria))
                },2000)
            })
            promesa.then(productos => setItems(productos))
        }else{
            const promesa = new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve(productos)
                },2000)
            })
            promesa.then(productos => {
                setItems(productos)          
            })
        }

    },[idCategoria])
    
    return  (
            <div>
                <div id = "ingreso">
                    <p>Bienvenido/a</p>
                    
                </div>
                <div className = "contenedorLibros">
                    <ItemList info = {items}/> 
                    

                </div>
            </div>
);

}




export default ItemListContainer

