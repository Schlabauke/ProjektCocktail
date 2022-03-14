// Main page content
import Alc from '../../data/alc.js';
import { v4 as uuidv4 } from 'uuid';
import AlcoholTemp from './AlcoholTemp.js';

const AlcoholItem = () => {
        return (
            <article className="mainPageAlcohol">
                {Alc.map(elt => 
                    <AlcoholTemp
                        key={uuidv4()}
                        name={elt.name}
                        tagline={elt.tagline}
                        link={elt.link}
                    />
                )}
            </article>
        );
    }

export default AlcoholItem;
