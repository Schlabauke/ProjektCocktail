import {Link} from "react-router-dom"

const CocktailTemp = () => {
    return (
        <article>
            <h3>CocktailName</h3>
            <img src="https://images.unsplash.com/photo-1583898350903-99fa829dad3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvY2t0YWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Cocktail" />
            <Link to="/">back</Link>
        </article>
    );
}

export default CocktailTemp;