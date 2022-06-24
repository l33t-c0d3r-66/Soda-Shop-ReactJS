import { useEffect, useRef } from 'react';
import {useGlobalContext} from '../../context/context';
import cssClasses from './SearchForm.module.css';
function SearchForm () {
    const {setSearchTerm} = useGlobalContext();
    const searchInput = useRef('');

    useEffect(()=> {
        searchInput.current.focus();
    },[]);

    const searchSoda = () => {
        setSearchTerm(searchInput.current.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <section className={cssClasses.SearchForm}>
            <form onSubmit={handleSubmit} className={cssClasses.Search}>
                <div className={cssClasses.FormControl}>
                    <label htmlFor='name'>Search for Your Favorite Soda</label>
                    <input type="text" id="name" ref={searchInput} onChange={searchSoda}/>
                </div>
            </form>
        </section>
    );
}

export default SearchForm;