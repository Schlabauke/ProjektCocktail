import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { useParams } from 'react-router';
import { Link } from "react-router-dom"

class cocktailDetails extends React.Component {
    state = {
        recipe: []
    }
    //wie kommt die ID des Cocktails in den fetch?! 
    componentDidMount = (props) => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.cocktailId}`)
            .then(response => response.json())
            .then(json => this.setState({ recipe: json.drinks }))
    }
    render() {
        return (
            <section>
                <Header />
                <article>
                    <h2>{this.state.props.strDrink}</h2>
                    <img src="" alt="cocktailbild" />
                    <p>Zutaten</p>
                    <p>Rezept</p>
                    <Link to="/">back</Link>
                </article>;
                <Footer />
            </section >
        );
    }
}

export default cocktailDetails;
