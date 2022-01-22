import React from 'react';
import Header from '../components/Header.js';
import CocktailTemp from '../components/CocktailTemp.js';
// import CocktailItems from '../components/CocktailItems.js';
import Footer from '../components/Footer.js';
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
                <Header />

                <section>
                    {this.state.drinkByIngredient.map(elt => <CocktailTemp
                        key={uuidv4()}
                        cocktailName={elt.strDrink}
                        cocktailImage={elt.strDrinkThumb}
                        cocktailId={elt.idDrink}
                    />)
                    }
                </section>

                <Footer />
            </section>
        );
    }
}

export default cocktails;