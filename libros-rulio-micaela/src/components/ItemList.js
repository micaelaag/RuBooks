import React from 'react'
import Item1 from "./Item1";

function ItemList({info}) {
    return (
        <div id = "contenedorLibros">
            <hr/>         
            
            <div id="cont">
                {(info!== null) && 
                info.map( (itm,index) =>
                    <Item1
                        key={index}
                        id={itm.id}
                        titulo={itm.titulo}
                        autor={itm.autor}
                        precio={itm.precio}
                        imgUrl={itm.url}
                        descripcion = {itm.descripcion}
                    />
            )}        
            </div>           
        </div>
    )
}

export default ItemList


