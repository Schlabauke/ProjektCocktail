import AlcoholTemp from './AlcoholTemp.js';
import React, { Component } from 'react';
import alc from './alc'
import { v4 as uuidv4 } from 'uuid'


class AlcoholItem extends React.Component {
    render() {
        return (
            <section id="mainAlcoholKind">
                {alc.map(el =>
                    <AlcoholTemp
                        id={uuidv4()}
                        alcname={el.name}
                        tagline={el.tagline}
                    />
                )}
            </section>
        );
    }
}
//in section JS in {}
export default AlcoholItem;
