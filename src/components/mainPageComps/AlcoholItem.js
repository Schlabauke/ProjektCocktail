// Main page content
import Alc from '../../data/alc.js';
import { v4 as uuidv4 } from 'uuid';
import AlcoholTemp from './AlcoholTemp.js';
import styles from "../../App.scss"

const AlcoholItem = () => {
    return (
        <article className="mainPageAlcohol">
            {Alc.map((elt, i) => <div
                className={`style${Math.floor((i % 6) + 1)} 
			${i % 2 == 0 ? 'left' : 'right'}
			`}
                key={elt.id}
            >
                <AlcoholTemp
                    key={uuidv4()}
                    name={elt.name}
                    tagline={elt.tagline}
                    link={elt.link}

                />
            </div>
            )}
        </article>
    );
}

export default AlcoholItem;
