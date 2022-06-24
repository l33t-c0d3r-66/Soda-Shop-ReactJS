import SearchForm from "../components/SearchForm/SearchForm";
import SodaList from '../components/SodaList/SodaList';

function Home() {
    return (
       <main>
            <SearchForm />
            <SodaList></SodaList>
       </main>
    );
}

export default Home;