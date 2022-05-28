import "../styles/Menu.css";
import { ReactComponent as Logo } from "../assets/portfolio-logo.svg";

const Menu = ({ routes, isMinimized }) => {
  const hideMenu = () => {
    if (window.innerWidth <= 600) {
      document.querySelector(".Menu").classList.add("Menu--hidden");
      document.querySelector(".Menu__nav").classList.remove("Menu__nav--show");
    }
  };

  return (
    <div
      className={"Menu" + (isMinimized ? " Menu--minimized" : "")}
      onClick={hideMenu}
    >
      <div
        className={
          "Header-minimized" + (isMinimized ? " Header-minimized--show" : "")
        }
      >
        <div className="Header-minimized__logo">
          <Logo />
        </div>
        <div className="Header-minimized__title">
          <span className="Header-minimized__name">Quentin CALMEL</span>
          <span className="Header-minimized__job"> Développeur Web</span>
        </div>
      </div>
      <div
        className={"Menu__nav" + (isMinimized ? " Menu__nav--minimized" : "")}
      >
        {routes.map((route) => (
          <a className="Menu__item" href={route.path}>
            {route.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
