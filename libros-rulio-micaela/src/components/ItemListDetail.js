import React from 'react'
import ItemDetail from "./ItemDetail";

function ItemListDetail({infoDetail}) {
    return (
        <div id = "contGral">
            <div>
                {(infoDetail!== null) && 
                infoDetail.map( (itm,index) =>
                    <ItemDetail
                        key={index}
                        titulo={itm.titulo}
                        precio={itm.precio}
                        imgUrl={itm.url}
                        detalle = {itm.detalle}
                    />
            )}        
            </div>           
        </div>
    )
}

export default ItemListDetail
