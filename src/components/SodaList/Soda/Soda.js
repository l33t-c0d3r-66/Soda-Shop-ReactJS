import { Link } from "react-router-dom";

import cssClasses from './Soda.module.css';

function Soda (props) {
    return (
        <article className={cssClasses.Soda}> 
            <div>
                <img src={props.image} alt={props.name} />
            </div>
            <div className={cssClasses.SodaFooter}>
                <h3>{props.name}</h3>
                <h4>{props.glass}</h4>
                <p>{props.info}</p>
                <Link to={`/soda/${props.id}`} className="btn btn-primary btn-details">Details</Link>
            </div>
        </article>
    );
}

export default Soda;