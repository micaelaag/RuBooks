

const ItemListContainer = (props) => {
    return  (
            <div id = "ingreso">
                <p>Bienvenido/a</p>
                <p>Nombre: {props.nombre}</p>
                <p>Email: {props.email}</p>
            </div>
    );

}




export default ItemListContainer