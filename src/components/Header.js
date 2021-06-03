import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

import "../styles/Header.css"
import pictureOfMe from "../assets/me.png"
const Header = () => {
    const showMenu = () => {
        const menu = document.querySelector('.Menu')
        menu.classList.remove('Menu--hidden')
        document.querySelector('.Menu__nav').classList.add('Menu__nav--show')
    }
    return (
        <div className="Header">
            <div className="menu__btn" onClick={showMenu}>
                <FontAwesomeIcon className="menu__icon" icon={faBars}/>
            </div>
            <div className="Header__picture-container">
                <img className="Header__picture" alt="photo de moi" src={pictureOfMe}/>
            </div>

            <div>
                <span className="Header__name">quentin calmel</span>
                <span className="Header__job"><span className="non-letter-smallcaps">&lt;</span>developpeur web<span
                    className="non-letter-smallcaps">/&gt;</span></span>
            </div>
        </div>
)

}

export default Header