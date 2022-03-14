import AlcoholTemp from './AlcoholTemp.js';
import Alc from './alc.js';
import { v4 as uuidv4 } from 'uuid';

const AlcoholItem = () => {
    
        return (
            <section id="mainAlcoholKind">
                {Alc.map(elt => 
                    <AlcoholTemp
                        key={uuidv4()}
                        name={elt.name}
                        tagline={elt.tagline}
                        link={elt.link}
                    />
                )}
            </section>
        );
    }


export default AlcoholItem;
