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
                <p><strong>{props.price}</strong> USD</p>
            </div>
            <Link to={`/soda/${props.id}`} style={{textAlign: 'center', paddingTop:'10px'}}className="btn btn-primary btn-details">
                <h3>Details</h3>
            </Link>
        </article>
    );
}

export default Soda;