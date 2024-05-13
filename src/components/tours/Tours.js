import "../tours/Tours.css";

import TourComponet from "./tour/Tour";
import travelData from '../../data/db.json'

function ToursComponet(props) {
    return (
        <section className="card-container">
            {
                travelData.map(tour => {
                    return (
                        <TourComponet key={tour.id} tour={tour}
                        // id={tour.id} image={tour.image} alt={tour.name} title={tour.name} 
                        />
                    )
                })
            }
        </section>

    )

}

export default ToursComponet;