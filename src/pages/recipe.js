import React from 'react';
import CocktailDetailItem from '../components/CocktailDetailItem.js';


class cocktailDetails extends React.Component {
    state = {
        recipe: []
    }

    componentDidMount = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.cocktailId}`)
            .then(response => response.json())
            .then(json => this.setState({ recipe: json.drinks[0] }))      
    }

    render() {
        return (
            <section>
                <h1>hallo</h1>
                <h1>{this.state.recipe.strDrink}</h1>
            </section>
        );
    }
}

export default cocktailDetails;