import { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../UI/Loading/Loading";
import cssClasses from './SodaDetail.module.css';

const url = "http://localhost:8080/soda/"


function SodaDetail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [soda, setSoda] = useState(null);

    const fetchSoda = useCallback(async() => {
        try {
            const response = await fetch(`${url}${id}`);
            const data = await response.json(); 
            if(data) {
                setSoda(data);
            } else {
                setSoda(null);
            }
        }catch(error) {
            console.log(error);
        }
        setLoading(false);
    },[id]);
    


    useEffect(() => {
        setLoading(true);
        fetchSoda();
    },[id, fetchSoda]);

    if(loading) {
        return <Loading />
    }

    if(!soda) {
        return <h2 className="section-title">No Soda to Display</h2>
    }
    return (
        <section className={cssClasses.SodaDetail}>
            <Link to="/" className="btn btn-primary" >Back to Home</Link>
            <h2 className={cssClasses.SodaDetailTitle}>{soda.name}</h2>
            <div className={cssClasses.SodaDrink}>
                <img src={soda.image} alt={soda.name} />
                <div className={cssClasses.SodaDrinkInfo}>
                    <p>
                        <span className={cssClasses.SodaDrinkData}>Name:</span>
                        {soda.name}
                    </p>
                    <p>
                        <span className={cssClasses.SodaDrinkData}>Price:</span>
                        {soda.price} USD
                    </p>
                    <p>
                        <span className={cssClasses.SodaDrinkData}>Glass:</span>
                        {soda.glass}
                    </p>
                    <p>
                        <span className={cssClasses.SodaDrinkData}>Glass Size:</span>
                        {soda.glassSize}
                    </p>
                    <p>
                        <span className={cssClasses.SodaDrinkData}>Ingredients:</span>
                        {soda.ingredients.split('\n').map((item, index) =>{
                            if(index === 0) 
                                return <span key={index}>{index+1}. {item}</span>;
                            return item?(<div style={{marginLeft: '17%'}}>
                                    <span key={index}>{index+1}. {item}</span>
                                </div>
                            ):null;
                        })} 
                    </p>
                    <p>
                        <span className={cssClasses.SodaDrinkData}>Instructions:</span>
                        {soda.instruction.split("\n").map((item, index) => {
                             if(index === 0) 
                                return <span key={index}>{index+1}. {item}</span>;
                            return item?(<div style={{marginLeft: '17%'}}>
                                     <span key={index}>{index+1}. {item}</span>
                                 </div>
                             ):null;
                        })}
                    </p>
                </div>
            </div>

        </section>
    );
}

export default SodaDetail;