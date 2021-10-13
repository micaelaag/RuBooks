import ItemDetail from "../components/ItemDetail";
import React, {useState,useEffect} from 'react';
import {productos} from "../components/productos";
import {useParams} from "react-router-dom";


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
                console.log("SOY PRODUCTO " + productos)
            }
            else { 
                reject( new Error("Error obteniendo los detalles"));
            }
        }, 
        2000);      
    });     
}





const ItemDetailContainer = () => {
    const [itemsDetalle,setItems] = React.useState(null);
    
    const {id} = useParams();
    console.log("soy params " + id)
    
    const [estado,setEstado] = useState('Cargando...');
    
    useEffect(() => {    
        let pedidoDetalles = crearPromesa();
        
        pedidoDetalles.then( function(items_promise){
            const indiceEncontrado = items_promise.findIndex((objeto,indice,items_promise)=>{
                return objeto.id == id;
            })
            console.log("es h: " + indiceEncontrado)

            console.log(items_promise[indiceEncontrado])
            const itemSeleccionado = items_promise[indiceEncontrado]
            items_promise = itemSeleccionado
            
            setItems(items_promise);     
            setEstado('Listo');           
            console.log(items_promise);

            // const i = items_promise.map((num, index) => console.log(num));
            // console.log(i)

            // let idFiltrado = items_promise.find(num => num.id == id);
            // console.log("el idFiltrado es " + idFiltrado)

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

    

    return  (
        <>
        {itemsDetalle ?
            <>
            <ItemDetail info={itemsDetalle} />
            </>
            :
            <div>Cargando </div>
        }
        </>
);
}

export default ItemDetailContainer