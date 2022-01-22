import { useParams } from 'react-router-dom';
import Recipe from '../pages/recipe.js';

const GetId = () => {
    let { id } = useParams()
    console.log(id)

    return (
        <section>
            <Recipe
                cocktailId={id}
            />
        </section>
    );
}

export default GetId;
