import ItemList from "../components/ItemList";
import ItemCount from "../components/ItemCount";
import React, {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import {productos} from "../../src/components/productos";


function comprobarError(){
    return (Math.random() < 0.2);
    }


function crearPromesa() {
    return new Promise((resolve, reject) => {  
    setTimeout(
        function(){                
            const error = comprobarError();           
            if(!(error)){      
                resolve(productos);  
            }
            else { 
                reject( new Error("Error obteniendo los datos"));
            }
        }, 
        2000);      
    });     
}




const ItemListContainer = (props) => {
    const [items,setItems] = React.useState(null);
    const [estado,setEstado] = useState('Cargando...');
    
    useEffect(() => {    
        let pedidoDatos = crearPromesa();

        pedidoDatos
        .then( function(items_promise){
            setItems(items_promise);     
            setEstado('Listo');           
            console.log(items_promise);
        })      

        .catch( function(errores){
            console.log(errores);   
            setEstado('Error detectado');       
        })
        .finally( ()=>{
                console.log('Promesa terminada');
            }
        )
    }, []);
    console.log(props)
    
    console.log("me ejcute una vez")
    const resultado = useParams();
    console.log(resultado)
    
    return  (
            <div>
                <div id = "ingreso">
                    <p>Bienvenido/a</p>
                    
                </div>
                <div className = "contenedorLibros">
                    <ItemList info = {items}/>             
                    <ItemCount/>     
                </div>
            </div>
);

}




export default ItemListContainer