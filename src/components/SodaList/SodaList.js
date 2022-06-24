import {useGlobalContext} from '../../context/context';
import Loading from '../UI/Loading/Loading';
import Soda from './Soda/Soda';
import cssClasses from './SodaList.module.css';
function SodaList() {
    const {sodas, loading} = useGlobalContext();
    if(loading) {
        return (
            <Loading />
        );
    }
    if(sodas.length < 1) {
        return (
            <h2 className='section-title'>No Soda with Search Keyword</h2>
        );
    }
    return (
        <section className={cssClasses.SodaList}>
            <h2 className={cssClasses.SodaListTitle}>Sodas</h2>
            <div className={cssClasses.SodaListCenter}>
                {sodas.map((item)=> {
                    return <Soda key={item.id} {...item}/>
                })}
            </div>
        </section>
        
    );
}

export default SodaList;