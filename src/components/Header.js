// Header
import { Link } from "react-router-dom"

const Header = () => {
    return (  
        <header>
            <nav>
                <p>DRINKS & CHILL</p>
                <Link to="/">HOME</Link>
                <div className="gradientBox"></div>
            </nav>
            <h1>Cocktails & Getränke</h1>
            <p>Herzlich willkommen in der Welt der Cocktails und Getränke.</p>
            <form action="">
                <input className="searchField" type="text" name="search" id="search" placeholder="tippe etwas"/>
                <input className="button" type="submit" value="suchen"/>
            </form>
        </header>
    );
}
 
export default Header;