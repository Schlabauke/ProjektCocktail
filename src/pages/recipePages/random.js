import React from 'react';
import BackButton from '../../components/BackButton';

class cocktails extends React.Component {
    state = {
        recipe: [],
    }

    componentDidMount = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(json => this.setState({ recipe: json.drinks[0] }))
    }

    render() {
        return (
            <section className="recipe">
                <h2>{this.state.recipe.strDrink}</h2>   
                <img src={this.state.recipe.strDrinkThumb} alt={this.state.recipe.strDrink} />
                <h3>Cocktail Rezept</h3>
                <h4>Zutaten</h4>
                <ul>
                    <li>{this.state.recipe.strMeasure1} {this.state.recipe.strIngredient1}</li>
                    <li>{this.state.recipe.strMeasure2} {this.state.recipe.strIngredient2}</li>
                    <li>{this.state.recipe.strMeasure3} {this.state.recipe.strIngredient3}</li>
                    <li>{this.state.recipe.strMeasure4} {this.state.recipe.strIngredient4}</li>
                </ul>
                <p>{this.state.recipe.strInstructions}</p>
                <BackButton />
            </section>
        );
    }
}

export default cocktails;