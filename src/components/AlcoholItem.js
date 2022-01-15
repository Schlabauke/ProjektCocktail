import AlcoholTemp from './AlcoholTemp.js';
import React, { Component } from 'react';



class AlcoholItem extends React.Component {
    render() {
        return (
            <section id="mainAlcoholKind">
                <AlcoholTemp />
            </section>
        );
    }
}

export default AlcoholItem;
