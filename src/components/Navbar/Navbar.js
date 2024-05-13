import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";

function NavBar(props) {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/"> Home</Link>
                    </li>

                </ul>
            </nav>
        </>
    )
}

export default NavBar;