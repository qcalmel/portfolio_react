import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/portfolio-logo.png";

import "../styles/Header.css";
import Menu from "./Menu";
import { useEffect, useState } from "react";
const Header = ({ routes }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const checkScrollYPos = () => {
    const headerHeight = window.innerWidth < 640 ? 1 : 248;
    const minScrollY = isMinimized ? 0 : headerHeight;
    if (window.scrollY > minScrollY) setIsMinimized(true);
    else setIsMinimized(false);
  };
  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", checkScrollYPos);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", checkScrollYPos);
    };
  });

  const showMenu = () => {
    const menu = document.querySelector(".Menu");
    menu.classList.remove("Menu--hidden");
    document.querySelector(".Menu__nav").classList.add("Menu__nav--show");
  };
  return (
    <>
      <div className={"Header" + (isMinimized ? " Header--hidden" : "")}>
        <div className="menu__btn" onClick={showMenu}>
          <FontAwesomeIcon className="menu__icon" icon={faBars} />
        </div>
        <div>
          <span className="Header__name">Quentin CALMEL</span>
          <span className="Header__job">Un Développeur Web</span>
          <span className="Header__lede">Curieux et passionné</span>
        </div>
        <div className="Header__picture-container">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <Menu routes={routes} isMinimized={isMinimized} />
      <div className={isMinimized ? "margin" : ""} />
    </>
  );
};

export default Header;
