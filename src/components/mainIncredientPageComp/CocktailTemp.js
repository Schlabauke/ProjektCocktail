// Incredient page content
import { Link } from "react-router-dom"

const CocktailTemp = (props) => {
    return (
        <Link to={`/recipe/${props.cocktailId}`}>
            <article >
                <h3>{props.cocktailName}</h3>
                <img src={props.cocktailImage} alt={props.cocktailName} />
            </article>
        </Link>
    );
}

export default CocktailTemp;
