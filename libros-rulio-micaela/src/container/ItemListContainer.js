import ItemList from "../components/ItemList";




const ItemListContainer = (props) => {
    return  (
            <div>
                <div id = "ingreso">
                    <p>Bienvenido/a</p>
                    <p>Nombre: {props.nombre}</p>
                    <p>Email: {props.email}</p>
                </div>
                <div className = "contenedorLibros">
                    <ItemList/>                    
                </div>
            </div>
);

}




export default ItemListContainer