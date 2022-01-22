import React, { Component } from 'react';
import CocktailTemp from './CocktailTemp';
import { v4 as uuidv4 } from 'uuid';


class CocktailItems extends Component {
    state = {
        drinkByIngredient: []
    }
    componentDidMount = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
            .then(response => response.json())
            .then(json => this.setState({ drinkByIngredient: json.drinks }))
    }
    render() {
        return (<section>
            {this.state.drinkByIngredient.map((elt) => <CocktailTemp
                key={uuidv4()}
                cocktailId={elt.idDrink}
                cocktailName={elt.strDrink}
                cocktailImage={elt.strDrinkThumb}
            />
            )}
        </section>
        )
    }

}

export default CocktailItems;

