import { useHistory } from "react-router-dom";
import SodaForm from "../components/SodaForm/SodaForm";
import {useGlobalContext} from '../context/context';
function AddSoda () {
    const  {setSodas, sodas} =  useGlobalContext();
    const history = useHistory();
    function addSodaHandler(data) {
        fetch("http://localhost:8080/soda",
            {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then((response)=> {
            return response.json();
        }).then(res=> {
            console.log(res);
            if(res) {
                setSodas(sodas.concat(res));
                history.replace("/");
            }
        });
        
    }
    return (
        <section className="section about-section">
            <h1 className="section-title">Add Soda</h1>
            <SodaForm addHandler={addSodaHandler}/>
        </section>
    );
}

export default AddSoda;