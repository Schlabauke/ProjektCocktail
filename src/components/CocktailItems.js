import React, { Component } from 'react';
import CocktailTemp from './CocktailTemp';
import { v4 as uuidv4 } from 'uuid';

class CocktailItems extends React.Component {
    state = {
        drinkByIngredient: [],
    }


    
    componentDidMount = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
            .then(response => response.json())
            .then(json => this.setState({ drinkByIngredient: json.drinks }))
    }

    render() {
        return (<section>
                {this.state.drinkByIngredient.map(elt => <CocktailTemp
                        key={uuidv4()}
                        cocktailName={elt.strDrink}
                        cocktailImage={elt.strDrinkThumb}
                        cocktailId={elt.idDrink}
                    />)
                }
            </section>);
    }
}

export default CocktailItems;

/* class CocktailItems extends Component {
    state = {
        drinkByIngredient: [],
    }

    componentDidMount = () =>  {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin')
            .then(response => response.json())
            .then(json => this.setState({ drinkByIngredient: json }))
    }

    render() {
        return (<section>
            {this.state.drinkByIngredient.map((elt) => {
                <CocktailTemp
                    key={uuidv4()}
                    cocktailName={elt.strDrink}
                    cocktailImage={elt.strDrinkThumb}
                    cocktailId={elt.idDrink}
                />})
            }
        </section>);
    }
}

export default CocktailItems; */