import ItemList from "../components/ItemList";
import React, {useState,useEffect} from 'react';




const productos = 
        [
        {
            id:1,
            titulo: "Orgullo y prejuicio",
            precio: "$ 2000",
            url:"./imagenes/orgullo.jpg",
            autor: "Jane Austin",
            descripcion: "....."
        },
        {
            id:2,
            titulo: "Jane Eyre",
            precio: "$ 1500",
            url:"./imagenes/jane.jpg",
            autor: "Charlote Bonte",
            descripcion: "....."
        },
        {
            id:3,
            titulo: "Dracula",
            precio: "$ 1000",
            url:"./imagenes/dracula.jpg",
            autor: "Bram Stoker",
            descripcion: "....."
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
    
    
    return  (
            <div>
                <div id = "ingreso">
                    <p>Bienvenido/a</p>
                    <p>Nombre: {props.nombre}</p>
                    <p>Email: {props.email}</p>
                </div>
                <div className = "contenedorLibros">
                    <ItemList info = {items}/>                    
                </div>
            </div>
);

}




export default ItemListContainer