import { Link } from 'react-router-dom';

import NavBar from "../Navbar/Navbar";
import "../header/Header.css";
function HeaderComponet(props) {
    return (
        <div className="header">
            <header>
                <h1>Travel Destination</h1>
                <NavBar />
            </header>

        </div>

    )
}

export default HeaderComponet;