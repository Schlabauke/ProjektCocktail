import { Link } from "react-router-dom"
import React from 'react';


const AlcoholTemp = (props) => {
    return (
        <article id="mainAlcoholKind">
            <Link to={props.link}>
                <h2>{props.name}</h2>
                <p>{props.tagline}</p>
            </Link>
        </article >

    );
}

export default AlcoholTemp;

