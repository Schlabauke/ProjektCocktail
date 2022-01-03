import React, { Component } from 'react';
import CocktailTemp from './CocktailTemp';

class CocktailItems extends Component {
    render() {
        return <section>
            <CocktailTemp />
            <CocktailTemp />
            <CocktailTemp />
            <CocktailTemp />
            <CocktailTemp />
        </section>;
    }
}

export default CocktailItems;