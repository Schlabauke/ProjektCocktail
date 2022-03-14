// Main incredient page
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import CocktailTemp from '../../components/mainIncredientPageComp/CocktailTemp.js';

class cocktails extends React.Component {
    state = {
        drinkByIngredient: [],
    }

    componentDidMount = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            .then(response => response.json())
            .then(json => this.setState({ drinkByIngredient: json.drinks }))
    }

    render() {
        return (
            <section className="ingredientPages">
                {this.state.drinkByIngredient.map((elt, i) => <div
                    className={`style${Math.floor((i % 6) + 1)} 
			${i % 2 == 0 ? 'left' : 'right'}
			`}
                    key={elt.id}
                >
                    <CocktailTemp
                        key={uuidv4()}
                        cocktailName={elt.strDrink}
                        cocktailImage={elt.strDrinkThumb}
                        cocktailId={elt.idDrink}
                    />
                </div>)
                }
            </section>
        );
    }
}

export default cocktails;