import {NavLink} from "react-router-dom";
import "../styles/Menu.css"
const Menu = () => {

    return (
        <div className="Menu">
            <div className="Menu__overlay"></div>
            <div className="Menu__nav">
                <NavLink className="Menu__item" activeClassName="Menu__item--active"  to="/competences">COMPETENCES</NavLink>
                <NavLink className="Menu__item" activeClassName="Menu__item--active" to="/moi">PRESENTATION</NavLink>
                <NavLink className="Menu__item" activeClassName="Menu__item--active" to="/projets">PROJETS</NavLink>
                <NavLink className="Menu__item" activeClassName="Menu__item--active" to="/contact">CONTACT</NavLink>
            </div>
        </div>
    )
}

export default Menu