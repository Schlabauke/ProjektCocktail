import React from 'react';
import Header from '../components/Header.js';
import CocktailTemp from '../components/CocktailTemp';
import Footer from '../components/Footer.js';
import { v4 as uuidv4 } from 'uuid';

class cocktails extends React.Component {
    state = {
        drinkByIngredient: []
    }
    componentDidMount = () => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
            .then(response => response.json())
            .then(json => this.setState({ drinkByIngredient: json.drinks }))
    }
    render() {
        return (<section>
            <Header />
            {this.state.drinkByIngredient.map((elt) => <CocktailTemp
                key={uuidv4()}
                cocktailId={elt.idDrink}
                cocktailName={elt.strDrink}
                cocktailImage={elt.strDrinkThumb}
            />
            )}
            <Footer />
        </section>
        )
    }
}

export default cocktails;