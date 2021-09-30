import array from "../components/ItemList";


import {useEffect} from 'react'


console.log(array)

const ItemListContainer = (props) => {
    useEffect(()=>{
        const promesa = new Promise ((resolve, reject) => {
            setTimeout(() => {
        
            resolve (array);
            }, 2000) 
        })
        promesa.then((param) =>{
            console.log(param)
        })
        
    },[])
    
const titulo = array[0].type.titulo
const img = array[0].type.url
const autor = array[0].type.autor
const descripcion = array[0].type.descripcion

const titulo2 = array[1].type.titulo
const img2 = array[1].type.url
const autor2 = array[1].type.autor
const descripcion2 = array[1].type.descripcion

const titulo3 = array[2].type.titulo
const img3 = array[2].type.url
const autor3 = array[2].type.autor
const descripcion3 = array[2].type.descripcion

    return  (
            <div>
                <div id = "ingreso">
                    <p>Bienvenido/a</p>
                    <p>Nombre: {props.nombre}</p>
                    <p>Email: {props.email}</p>
                </div>
                <div id = "contenedorLibros">
                    <div className = "contLibros">
                        <h3>{titulo}</h3>
                        <img src = {img}></img>
                        <p>{autor}</p>
                        <p>{descripcion}</p>
                    </div>
                    <div className = "contLibros">
                        <h3>{titulo2}</h3>
                        <img src = {img2}></img>
                        <p>{autor2}</p>
                        <p>{descripcion2}</p>
                    </div>
                    <div className = "contLibros">
                        <h3>{titulo3}</h3>
                        <img src = {img3}></img>
                        <p>{autor3}</p>
                        <p>{descripcion3}</p>
                    </div>                    
                </div>
            </div>
);

}




export default ItemListContainer