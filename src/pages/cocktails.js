import Header from '../components/Header'
import Footer from '../components/Footer'
import CocktailItems from '../components/CocktailItems'

import React, { Component } from 'react';


class Cocktails extends React.Component {
    render() {
        return <section>
            <Header />
            <CocktailItems />
            <Footer />
        </section>;
    }
}

export default Cocktails;