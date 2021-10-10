import ItemListDetail from "../components/ItemListDetail";
import React, {useState,useEffect} from 'react';




const productos_detalle = 
        [
        {
            id:1,
            titulo: "Orgullo y prejuicio",
            precio: "$ 2000",
            url:"./imagenes/orgullo.jpg",
            detalle: "La señora Bennet ha criado a sus cinco hijas con el único deseo de encontrar marido. La llegada al vecindario de Charles Bingley, un joven rico y soltero, con algunas amistades despierta el interés de las hermanas Bennet y de las familias vecinas, que verán una excelente oportunidad para cumplir su propósito."
        },
        {
            id:2,
            titulo: "Jane Eyre",
            precio: "$ 1500",
            url:"./imagenes/jane.jpg",
            autor: "Charlote Bonte",
            detalle: "Jane Eyre huye de Thornfield House, donde trabaja como institutriz contratada por el apuesto y acaudalado Edward Rochester. La aislada mansión, así como la frialdad del Sr. Rochester han puesto a prueba la resistencia y fortaleza de la joven. Pero al reflexionar sobre su pasado, Jane regresará a la mansión para descubrir el secreto que esconde el Sr. Rochester."
        },
        {
            id:3,
            titulo: "Dracula",
            precio: "$ 1000",
            url:"./imagenes/dracula.jpg",
            autor: "Bram Stoker",
            detalle: "Jonathan Harker es un joven abogado que viaja a un castillo perdido en el este de Europa, siendo allí capturado por el conde Drácula, que viajará hasta Londres inspirado por una fotografía de la prometida de Harker, Mina. Ya en Inglaterra, el conde iniciará su intento de conquista y reinado de seducción y terror, absorbiendo la vida de la mejor amiga de Mina, Lucy."
        },
        
    ];


function comprobarError(){
    return (Math.random() < 0.2);
    }


function crearPromesa() {
    return new Promise((resolve, reject) => {  
    setTimeout(
        function(){                
            const error = comprobarError();           
            if(!(error)){      
                resolve(productos_detalle);  
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
    const [estado,setEstado] = useState('Cargando...');
    
    useEffect(() => {    
        let pedidoDetalles = crearPromesa();

        pedidoDetalles
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
    


    return  (
            <div>
                <div>
                    <ItemListDetail infoDetail = {itemsDetalle}/>                    
                </div>
            </div>
);

}




export default ItemDetailContainer