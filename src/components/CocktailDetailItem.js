import React from 'react';
import { Link } from "react-router-dom"


//SFC mit props

const CoktailDetailItem = (props) => {
    return (<article>
        <h2>Cocktail Name</h2>
        <img src="" alt="cocktailbild" />
        <p>Zutaten</p>
        <p>Rezept</p>
        <Link to="/">back</Link>
    </article>);
}

export default CoktailDetailItem;


