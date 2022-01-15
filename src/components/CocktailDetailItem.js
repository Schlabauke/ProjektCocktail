import React from 'react';
import {Link} from "react-router-dom"

class CocktailDetailItem extends React.Component {
    render() {
        return (
            <article>
                <h2>Cocktail Rezept</h2>
                <img src="" alt="cocktailbild" />
                <Link to="/">back</Link>
            </article>
        );
    }
}

export default CocktailDetailItem;

