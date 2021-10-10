import React from 'react';

const Item1 = (props) => {
    return (
        <div>
            <div className="contLibros">
                <img src={props.imgUrl}/>
                <h3>
                    {props.titulo}
                </h3>
                <h2>
                    {props.precio}
                </h2>
                <p>
                    {props.descripcion}
                </p>
                
            </div>
        </div>
    );
}

export default Item1;