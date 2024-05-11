import HeaderComponet from "../header/Header";
import FooterComponet from "../footer/Footer";
import ToursComponet from "../tours/Tours";
import "../home/Home.css";
import travelData from '../../data/db.json'

function HomeComponent() {
    return (
        <>
            <HeaderComponet />
            <main>
                {
                    travelData.map(tour => {
                        return (
                            <ToursComponet image={tour.image} alt={tour.name} title={tour.name} />
                        )
                    })
                }
            </main>

            <FooterComponet />

        </>
    );
}

export default HomeComponent;
