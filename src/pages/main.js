import Header from '../components/Header'
import Footer from '../components/Footer'
import AlcoholItem from '../components/AlcoholItem'

import React, { Component } from 'react';


class Main extends React.Component {
    render() {
        return <section>
            <Header />
            <AlcoholItem />
            <Footer />
        </section>;
    }
}

export default Main;


