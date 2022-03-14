// Main incredient page
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import CocktailTemp from '../../components/mainIncredientPageComp/CocktailTemp.js';

class cocktails extends React.Component {
    state = {
        drinkByIngredient: [],
    }

    componentDidMount = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
            .then(response => response.json())
            .then(json => this.setState({ drinkByIngredient: json.drinks }))
    }

    render() {
        return (
            <section className="ingredientPages">
                {this.state.drinkByIngredient.map(elt => <CocktailTemp
                    key={uuidv4()}
                    cocktailName={elt.strDrink}
                    cocktailImage={elt.strDrinkThumb}
                    cocktailId={elt.idDrink}
                />)
                }
            </section>
        );
    }
}

export default cocktails;