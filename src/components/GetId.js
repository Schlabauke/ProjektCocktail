import { useParams } from "react-router-dom";
import CocktailDetailItem from "./CocktailDetailItem";

const GetId = () => {
    let { id } = useParams()
    //console.log(id)
    return (
        <section>
            <CocktailDetailItem
                cocktailId={id} />
        </section>
    );
}

export default GetId;