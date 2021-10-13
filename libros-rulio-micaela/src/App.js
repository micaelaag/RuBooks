import Header from "./components/Header";
import ItemListContainer from "./container/ItemListContainer";
import ItemDetailContainer from "./container/ItemDetailContainer";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {BrowserRouter, Route, Switch} from "react-router-dom";



const App = () => {

    return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route path="/" component={ItemListContainer} exact/>
                    <Route path="/Productos/" component={ItemListContainer} exact/>
                    <Route path="/detalles/:id" component={ItemDetailContainer} exact/>  
                    <Route path="/Recomendaciones/" component={Main} exact/>  
                    <Route path="/Mediosdepago/" component={Main} exact/>  
                    <Route path="/Contacto/" component={Footer} exact/>  

                        
            
                </Switch>           
            </BrowserRouter>
    )
}
export default App