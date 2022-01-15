import React from 'react';
import Header from '../components/Header.js';
import CocktailItems from '../components/CocktailItems.js';
import Footer from '../components/Footer.js';


class cocktails extends React.Component {
    render() {
        return (
            <section>
                <Header />
                <CocktailItems />
                <Footer />
            </section>
        );
    }
}

export default cocktails;