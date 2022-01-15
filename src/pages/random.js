import React from 'react';
import Header from '../components/Header.js';
import CocktailDetailItem from '../components/CocktailDetailItem.js';
import Footer from '../components/Footer.js';


class random extends React.Component {
    render() {
        return (
            <section>
                <Header />
                <CocktailDetailItem />
                <Footer />
            </section>
        );
    }
}

export default random;