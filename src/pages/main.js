import React from 'react';
import Header from '../components/Header.js';
import AlcoholItem from '../components/AlcoholItem.js';
import Footer from '../components/Footer.js';


class main extends React.Component {
    render() {
        return (
            <section>
                <Header />
                <AlcoholItem />
                <Footer />
            </section>
        );
    }
}

export default main;
