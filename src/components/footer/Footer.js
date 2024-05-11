import "../footer/Footer.css";
import facebookIcon from '../../icons/facebook.png';
import instagramIcon from '../../icons/instagram.png';
function FooterComponet(props) {
    return (
        <div class="footer">
            <footer>
                <p>&copy; 2024 Debsawi's Website. All rights reserved.</p>
                <a href="https://www.facebook.com/" target="_blank"><i><img src={facebookIcon}></img>
                </i></a>
                <a href="https://www.instagram.com/" target="_blank"><i><img src={instagramIcon}></img>
                </i></a>
            </footer>

        </div>

    )
}

export default FooterComponet;