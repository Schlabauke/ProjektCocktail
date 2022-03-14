import React from 'react';
import CocktailTemp from '../components/CocktailTemp.js';
// import CocktailItems from '../components/CocktailItems.js';
import { v4 as uuidv4 } from 'uuid';


class cocktails extends React.Component {
    state = {
        drinkByIngredient: [],
    }

    componentDidMount = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum')
            .then(response => response.json())
            .then(json => this.setState({ drinkByIngredient: json.drinks }))
    }

    render() {
        return (
            <section>
                <section>
                    {this.state.drinkByIngredient.map(elt => <CocktailTemp
                        key={uuidv4()}
                        cocktailName={elt.strDrink}
                        cocktailImage={elt.strDrinkThumb}
                        cocktailId={elt.idDrink}
                    />)
                    }
                </section>
            </section>
        );
    }
}

export default cocktails;