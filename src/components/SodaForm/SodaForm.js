import { useRef } from 'react';
import cssClasses from './SodaForm.module.css';
function SodaForm() {
    const nameInput = useRef('');
    const priceInput = useRef(0);
    const glassInput = useRef('');
    const glassSizeInput = useRef('');
    const ingredientsInput = useRef('');
    const instructionsInput = useRef('');

    function onSubmitHandler(event) {
        event.preventDefault();

        const formData = {
            name: nameInput.current.value,
            price: priceInput.current.value,
            glass: glassInput.current.value,
            glassSize: glassSizeInput.current.value,
            ingredients: ingredientsInput.current.value,
            instructions: instructionsInput.current.value
        }

        console.log(formData);
    }

    return (
        <section className={cssClasses.SodaForm}>
            <form onSubmit={onSubmitHandler} className={cssClasses.Soda}>
                <div className={cssClasses.FormControl}>
                    <label htmlFor='name'>Enter Soda Name</label>
                    <input type="text" id="name" ref={nameInput}/>
                </div>
                <div className={cssClasses.FormControl}>
                    <label htmlFor='price'>Enter Soda Price (USD)</label>
                    <input type="number" id="price" step={0.1} ref={priceInput}/>
                </div>
                <div className={cssClasses.FormControl}>
                    <label htmlFor='glass'>Enter Soda Glass</label>
                    <input type="text" id="glass" ref={glassInput}/>
                </div>
                <div className={cssClasses.FormControl}>
                    <label htmlFor='glass-size'>Enter Glass Size</label>
                    <input type="text" id="glass-size" ref={glassSizeInput}/>
                </div>
                <div className={cssClasses.FormControl}>
                    <label htmlFor='ingredients'>Enter Ingredients</label>
                    <textarea id="ingredients" rows="3" ref={ingredientsInput}></textarea>
                </div>
                <div className={cssClasses.FormControl}>
                    <label htmlFor='instructions'>Enter Instructions</label>
                    <textarea id="instructions" rows="5" ref={instructionsInput}></textarea>
                </div>
                <div className={cssClasses.FormButton}>
                    <button type="submit" className='btn btn-primary btn-details'>ADD SODA</button>
                </div>
            </form>
        </section>
    );
}

export default SodaForm;