// Main page content template
import { Link } from "react-router-dom"

const AlcoholTemp = (props) => {
    return (
        <>
            <Link to={props.link}>
                <h2>{props.name}</h2>
                <p>{props.tagline}</p>
            </Link>
        </>
    );
}

export default AlcoholTemp;

