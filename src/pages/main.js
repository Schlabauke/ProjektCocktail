// Main page
import React from 'react';
import AlcoholItem from '../components/mainPageComps/AlcoholItem.js';

class main extends React.Component {
    render() {
        return (
            <section className="mainPage">
                <AlcoholItem />
            </section>
        );
    }
}

export default main;