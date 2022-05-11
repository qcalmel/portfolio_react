import {NavLink} from "react-router-dom";
import "../styles/Menu.css"

const Menu = ({routes}) => {

    const hideMenu = () => {
        if (window.innerWidth <= 600) {
            document.querySelector('.Menu').classList.add('Menu--hidden')
            document.querySelector('.Menu__nav').classList.remove('Menu__nav--show')
        }
    }

    const isActive = (match, location) => {
        console.log(location)
        if (!location) return false
        const {pathname} = location
        if (match?.isExact) {
            return true
        } else {
            return pathname === "/"
        }

    }

    return (
        <div className="Menu Menu--hidden Menu--shadow" onClick={hideMenu}>
            <div className="Menu__nav">
                {
                    routes.map((route) => {
                        const activeProp = {
                            isActive: isActive
                        }
                        if (!Array.isArray(route.path)) delete activeProp.isActive
                        return (
                            <NavLink
                                key={route.name}
                                className="Menu__item"
                                activeClassName="Menu__item--active"
                                title={route.name}
                                to={Array.isArray(route.path) ? route.path[1] : route.path}
                                {...activeProp}
                            >
                                {route.name}
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Menu