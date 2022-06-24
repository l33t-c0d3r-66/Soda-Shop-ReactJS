import { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../../UI/Loading/Loading";
import cssClasses from './SodaDetail.module.css';

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="


function SodaDetail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [soda, setSoda] = useState(null);

    const fetchSoda = useCallback(async() => {
        try {
            const response = await fetch(`${url}${id}`);
            const data = await response.json(); 
            const {drinks} = data;
            if(drinks) {
                const {
                    strDrink: name,
                    strDrinkThumb: image,
                    strAlcoholic: info,
                    strCategory: category,
                    strGlass: glass,
                    strInstructions: instructions,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                } = data.drinks[0];
                const ingredients = [
                    strIngredient1, 
                    strIngredient2, 
                    strIngredient3, 
                    strIngredient4, 
                    strIngredient5
                ];
                const newSoda = {
                    name, image, info, category,glass, instructions, ingredients
                };
                setSoda(newSoda);

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
                        <span className={cssClasses.SodaDrinkData}>Categoy:</span>
                        {soda.category}
                    </p>
                    <p>
                        <span className={cssClasses.SodaDrinkData}>Info:</span>
                        {soda.info}
                    </p>
                    <p>
                        <span className={cssClasses.SodaDrinkData}>Glas:</span>
                        {soda.glass}
                    </p>
                    <p>
                        <span className={cssClasses.SodaDrinkData}>Instructions:</span>
                        {soda.instructions}
                    </p>
                    <p>
                        <span className={cssClasses.SodaDrinkData}>ingredients:</span>
                        {soda.ingredients.map((item, index) => {
                            return item? <span key={index}>{item}</span>: null;
                        })}
                    </p>
                </div>
            </div>

        </section>
    );
}

export default SodaDetail;