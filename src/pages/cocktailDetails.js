/* import React from 'react';
import Header from '../components/Header.js';
import CocktailDetailItem from '../components/CocktailDetailItem.js';
import Footer from '../components/Footer.js';


class cocktailDetails extends React.Component {
    state = {
        recipe: []
    }

    componentDidMount = () => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.cocktailId}`)
            .then(response => response.json())
            .then(json => this.setState({ recipe: json.drinks }))
    }

    render() {
        return (
            <section>
                <Header />
                <h1>{this.state.strDrink}</h1>
                <Footer />
            </section>
        );
    }
}

export default cocktailDetails; */