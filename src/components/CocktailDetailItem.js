import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class CocktailDetailItem extends React.Component {
    render() {
        return (<article>
            <Link to='/cocktails'>Back</Link>
            <h2>Cocktailname</h2>
            <p>Bild</p>
            <p>Zutaten & Zubereitung</p>
        </article>);
    }
}


export default CocktailDetailItem;