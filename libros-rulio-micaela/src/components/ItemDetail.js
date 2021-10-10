import React from 'react';

const ItemDetail = (props) => {
    return (
        <div id = "contDetails">
            <div>
                <img src={props.imgUrl}/>
                <h3>
                    {props.titulo}
                </h3>
                <h2>
                    {props.precio}
                </h2>
                <p>
                    {props.detalle}
                </p>
            </div>
        </div>
    );
}

export default ItemDetail;