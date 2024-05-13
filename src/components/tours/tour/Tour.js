import "../tour/Tour.css";
import { Link } from 'react-router-dom';

function TourComponet(props) {
    return (

        < Link to={`/city/${props.tour.id}`}>
            <section className="card-container">
                <div className="card">
                    <img src={props.tour.image} alt={props.tour.name}></img>
                    <h2>{props.tour.name}</h2>
                </div>
            </section>

        </Link >

    )

}

export default TourComponet;