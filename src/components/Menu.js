import "../styles/Menu.css";
import logo from "../assets/portfolio-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, mark } from "@fortawesome/free-solid-svg-icons";

import { useRef, useState } from "react";

const Menu = ({ routes, isMinimized }) => {
  const [isBurgerMenuShowed, setIsBurgerMenuShowed] = useState(false);
  const navMenuRef = useRef();

  const showBurgerMenu = () => {
    setIsBurgerMenuShowed(true);
    navMenuRef.current.classList.add("Menu__nav--showed");
    document.body.classList.add("stop-scrolling");
  };
  const hideBurgerMenu = () => {
    setIsBurgerMenuShowed(false);
    navMenuRef.current.classList.remove("Menu__nav--showed");
    document.body.classList.remove("stop-scrolling");
  };

  return (
    <div className={"Menu" + (isMinimized ? " Menu--minimized" : "")}>
      <div
        className={
          "Header-minimized" + (isMinimized ? " Header-minimized--show" : "")
        }
      >
        <div className="Header-minimized__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="Header-minimized__title">
          <span className="Header-minimized__name">Quentin CALMEL</span>
          <span className="Header-minimized__job"> Développeur Web</span>
        </div>
      </div>
      <div className="Menu__burger">
        {isBurgerMenuShowed ? (
          <button className="Button__burger" onClick={hideBurgerMenu}>
            <span>X</span>
          </button>
        ) : (
          <button className="Button__burger" onClick={showBurgerMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}
      </div>
      <div
        className={"Menu__nav" + (isMinimized ? " Menu__nav--minimized" : "")}
        ref={navMenuRef}
      >
        {routes.map((route) => (
          <a onClick={hideBurgerMenu} className="Menu__item" href={route.path}>
            {route.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
