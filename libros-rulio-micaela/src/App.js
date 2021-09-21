import Header from "./components/Header";
import ItemListContainer from "./container/ItemListContainer";
import Main from "./components/Main";
import Footer from "./components/Footer";



const App = () => {
    const usuario = prompt("Indique su nombre");
    const correo = prompt("Indique su email");
    return (
            <>
                <Header/>
                <ItemListContainer nombre = {usuario} email = {correo}/>
                <Main/>
                <Footer/>
            </>
    )
}
export default App