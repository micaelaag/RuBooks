// Debes lograr separar la responsabilidad del count, del detalle del ítem, y esperar los eventos de agregado emitidos por el ItemCount 
// Cuando ItemCount emita un evento onAdd almacenarás ese valor en un estado interno del ItemDetail para hacer desaparecer el ItemCount
// Cuando el estado interno de ItemDetail tenga la cantidad de ítems solicitados mostrar en su lugar un botón que diga “Terminar mi compra” 

// Ejemplo inicial:
// function ItemDetail({ item }) {
//  onAdd(quantityToAdd) {
//      // Hemos recibido un evento del ItemCount
//  }
// return <>
//            …
//      <ItemCount > // Configura las props de ItemCount
//      <Button>Termina tu compra</Button> // Oculto hasta que el usuario seleccione la cantidad y clickee en comprar

// </>;
//  // Utilizar dentro de itemdetail el counter
// }






// Al clickear comprar en ItemDetail se debe guardar en el CartContext el producto y su cantidad en forma de objeto { item: {} , quantity }






// Aspectos a incluir en el entregable:
// De no haber ítems muestra un mensaje, de manera condicional, diciendo que no hay ítems y un react-router Link o un botón para que pueda volver al Landing (ItemDetailContainer.js) para buscar y comprar algo.


// categorias


// import React from 'react'
// import ItemList from "./ItemList"
// import {useParams} from "react-router-dom";


// function Categorias({categoria}) {
//     console.log(categoria)

//     const {idCategoria} = useParams()
//     console.log("el idcategoria es "+ idCategoria)
//     const categoriaSeleccionada = categoria.filter(item => item.idCategoria == idCategoria)
//     console.log(categoriaSeleccionada)
// const buscarGenero = categoriaSeleccionada[0];

// console.log(buscarGenero)

// const genero = buscarGenero.genero

//     return (
//     <div>
//         <h3>{genero}</h3>
//             <ItemList info = {categoriaSeleccionada}/>
//     </div>
//     )}

// export default Categorias
