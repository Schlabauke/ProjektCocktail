import React from 'react';
import Header from '../components/Header.js';
import CocktailDetailItem from '../components/CocktailDetailItem.js';
import Footer from '../components/Footer.js';
import { v4 as uuidv4 } from 'uuid';

class random extends React.Component {
    state = {
        drinkByIngredient: []
    }
    componentDidMount = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(response => response.json())
            .then(json => this.setState({ drinkByIngredient: json.drinks }))
    }
    render() {
        return (<section>
            <Header />
            {this.state.drinkByIngredient.map((elt) => <CocktailDetailItem
                key={uuidv4()}
                cocktailId={elt.idDrink}
                cocktailName={elt.strDrink}
                cocktailImage={elt.strDrinkThumb}
                cocktailInstructions={elt.instructions}
            />
            )}
            <Footer />
        </section>
        )
    }
}

export default random;