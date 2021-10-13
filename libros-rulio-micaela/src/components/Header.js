import Nav from "./Nav";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <Link to ="/">LOGO RuBooks</Link>
            <Nav/>
        </header>
    );

}


export default Header;