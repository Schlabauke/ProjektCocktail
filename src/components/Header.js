const Header = () => {
    return (  
        <header>
            <nav>
                <p>DRINKS & CHILL</p>
                <a href="#">HOME</a>
            </nav>
            <h1>Cocktails & Getränke</h1>
            <p>HERZLICH WILLKOMMEN IN DER WELT DER COCKTAILS UND GETRÄNKE</p>
            <form action="">
                <input type="text" name="search" id="search" placeholder="tippe etwas"/>
                <input type="submit" value="suchen"/>
            </form>

        </header>
    );
}
 
export default Header;