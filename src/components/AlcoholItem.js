import AlcoholTemp from './AlcoholTemp.js';
import React, { Component } from 'react';
import Alc from './alc.js';
import { v4 as uuidv4 } from 'uuid';


class AlcoholItem extends React.Component {
    render() {
        return (
            <section id="mainAlcoholKind">
                {Alc.map(elt =>
                    <AlcoholTemp
                        key={uuidv4()}
                        name={elt.name}
                        tagline={elt.tagline}
                        link={elt.link}
                    />
                )
                }
            </section >
        );
    }
}
//in section JS in {}
export default AlcoholItem;
