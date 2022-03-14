import React from 'react';
import CocktailDetailItem from '../components/CocktailDetailItem.js';
// import CocktailItems from '../components/CocktailItems.js';
import { v4 as uuidv4 } from 'uuid';


class cocktails extends React.Component {
    state = {
        cocktailRecipe: [],
    }

    componentDidMount = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            .then(response => response.json())
            .then(json => this.setState({ cocktailRecipe: json.drinks }))
    }

    render() {
        return (
            <section>
                <CocktailDetailItem/>
                {/* <section>
                    {this.state.cocktailRecipe.map(elt => <CocktailDetailItem
                        key={uuidv4()}
                        cocktailName={elt.strDrink}
                        cocktailImage={elt.strDrinkThumb}
                        cocktailId={elt.idDrink}
                    />)
                    }
                </section> */}
            </section>
        );
    }
}

export default cocktails;