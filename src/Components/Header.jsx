import { Link } from "react-router";
import logo from "../assets/logo.png"

const Header = () => {
    return ( 
        <header className="headerContainer">
            <div className="itensHeader">
                <img src={logo} alt="Logo da páginaa"/>
                <h1>Wildline</h1>
            </div>
            <nav>
                <Link className="linkNav" to="/">Home</Link>
                <Link className="linkNav" to="/About">About</Link>
                <Link className="linkNav" to="/Contact">Contact</Link>
            </nav>
        </header>
     );
}
 
export default Header;