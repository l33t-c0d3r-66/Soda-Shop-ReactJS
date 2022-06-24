import { useHistory } from "react-router-dom";
import SodaForm from "../components/SodaForm/SodaForm";

function AddSoda () {
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
        ).then(()=> {
            history.replace('/');
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