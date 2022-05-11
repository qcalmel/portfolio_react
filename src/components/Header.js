import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {ReactComponent as Logo} from "../assets/portfolio-logo.svg";

import "../styles/Header.css"
import pictureOfMe from "../assets/logo.png"
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


            <div>
                <span className="Header__name">Quentin CALMEL</span>
                <span className="Header__job">Un Développeur Web</span>
                <span className="Header__lede">Curieux et passionné</span>
            </div>
            <div className="Header__picture-container">
                <Logo/>
            </div>
        </div>
)

}

export default Header