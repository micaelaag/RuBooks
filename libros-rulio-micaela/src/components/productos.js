import React from "react"
import jane from "../imagenes/jane.jpg";
import orgullo from "../imagenes/orgullo.jpg";
import dracula from "../imagenes/dracula.jpg";

export const productos = 
    
        [
            {
                "id":1,
                "titulo": "Orgullo y prejuicio",
                "precio": 2000,
                "url": orgullo,
                "idCategoria":1,
                "genero": "Clasico",
                "autor":"Jane Austin",
                "stock":30,
                "detalle": "La señora Bennet ha criado a sus cinco hijas con el único deseo de encontrar marido. La llegada al vecindario de Charles Bingley, un joven rico y soltero, con algunas amistades despierta el interés de las hermanas Bennet y de las familias vecinas, que verán una excelente oportunidad para cumplir su propósito."
            },
            {
                "id":2,
                "titulo": "Jane Eyre",
                "precio": 1500,
                "url":jane,
                "idCategoria":1,
                "genero": "Clasico",
                "autor": "Charlote Bonte",
                "stock":20,
                "detalle": "Jane Eyre huye de Thornfield House, donde trabaja como institutriz contratada por el apuesto y acaudalado Edward Rochester. La aislada mansión, así como la frialdad del Sr. Rochester han puesto a prueba la resistencia y fortaleza de la joven. Pero al reflexionar sobre su pasado, Jane regresará a la mansión para descubrir el secreto que esconde el Sr. Rochester."
            },
            {
                "id":3,
                "titulo": "Dracula",
                "precio": 1000,
                "url":dracula,
                "idCategoria":2,
                "autor": "Bram Stoker",
                "genero": "Terror",
                "stock":40,
                "detalle": "Jonathan Harker es un joven abogado que viaja a un castillo perdido en el este de Europa, siendo allí capturado por el conde Drácula, que viajará hasta Londres inspirado por una fotografía de la prometida de Harker, Mina. Ya en Inglaterra, el conde iniciará su intento de conquista y reinado de seducción y terror, absorbiendo la vida de la mejor amiga de Mina, Lucy."
            }
            
        ]

    




