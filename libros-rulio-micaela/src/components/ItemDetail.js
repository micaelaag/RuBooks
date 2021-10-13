import React from 'react';


const ItemDetail = ({info}) => {
    return (
        <div id = "contDetails">
            <div>
                <img src={info.url}/>
                <h3>
                    {info.titulo}
                </h3>
                <h2>
                    {info.precio}
                </h2>
                <p>
                    {info.detalle}
                </p>
            </div>

        </div>
    );
}

export default ItemDetail;

