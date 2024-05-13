import HeaderComponet from "../header/Header";
import FooterComponet from "../footer/Footer";
import travelData from '../../data/db.json';
import './TourDetails.css'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function TourDetailsComponent(props) {

    let { id } = useParams();
    function getCityData() {
        return travelData.filter(city => city.id == id)[0]
    }
    const tour = getCityData();

    let buttonTitle = "see more";
    const [readMore, setReadMore] = useState(false);

    function switchReadMore() {
        setReadMore(!readMore)
        buttonTitle = readMore ? "see more" : "see less";
    }

    return (
        <>
            <HeaderComponet />
            <main>
                <div>
                    <h2>{tour.name}</h2>

                    <img src={tour.image} alt={tour.info}></img>
                    <h4>
                        {readMore ? tour.info : tour.info.slice(0, 400)}
                        <button onClick={switchReadMore}>{buttonTitle}</button>
                    </h4>

                </div>
            </main>

            <FooterComponet />
        </>
    )
}

export default TourDetailsComponent;


function getCityData(id) {

    return travelData.filter((tour) => tour.id === id)[0];

}