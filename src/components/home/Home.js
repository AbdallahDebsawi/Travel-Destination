import HeaderComponet from "../header/Header";
import FooterComponet from "../footer/Footer";
import ToursComponet from "../tours/Tours";
import "../home/Home.css";
import travelData from '../../data/db.json';
import NavBar from "../Navbar/Navbar";

function HomeComponent() {
    return (
        <>
            <HeaderComponet />
            <main>
                <ToursComponet />
            </main>

            <FooterComponet />

        </>
    );
}

export default HomeComponent;
