import Header from "./components/Header";
import ItemListContainer from "./container/ItemListContainer";
import ItemDetailContainer from "./container/ItemDetailContainer";
import Main from "./components/Main";
import Footer from "./components/Footer";



const App = () => {
    const usuario = prompt("Indique su nombre");
    const correo = prompt("Indique su email");
    return (
            <>
                <Header/>
                <ItemListContainer nombre = {usuario} email = {correo}/>
                <ItemDetailContainer/>
                <Main/>
                <Footer/>
            </>
    )
}
export default App