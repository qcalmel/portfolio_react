import {NavLink} from "react-router-dom";
import "../styles/Menu.css"
const Menu = ({routes}) => {

    const hideMenu = () => {
        if(window.innerWidth <= 600){
            document.querySelector('.Menu').classList.add('Menu--hidden')
            document.querySelector('.Menu__nav').classList.remove('Menu__nav--show')
        }
    }

    return (
        <div className="Menu Menu--hidden Menu--shadow" onClick={hideMenu}>
            <div className="Menu__nav">
                {
                    routes.map((route)=>(
                        <NavLink
                            className="Menu__item"
                            activeClassName="Menu__item--active"
                            to={Array.isArray(route.path) ? route.path[1]: route.path}
                        >
                            {route.name}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

export default Menu