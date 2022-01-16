import Header from '../components/Header'
import Footer from '../components/Footer'
import CocktailDetailItem from '../components/CocktailDetailItem'

import React, { Component } from 'react';


class CocktailDetail extends React.Component {
    render() {
        return <section>
            <Header />
            <CocktailDetailItem />
            <Footer />
        </section>;
    }
}

export default CocktailDetail;