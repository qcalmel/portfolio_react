import "../styles/Header.css"
import pictureOfMe from "../assets/me.png"
const Header = () => {
    const toggleMenu = () => {
        const menu = document.querySelector('.Menu')
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block'
    }
    return (
        <div className="header">
            <div className="menu__btn" onClick={toggleMenu}>
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                     className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512">
                    <path fill="currentColor"
                          d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                </svg>
            </div>
            <div className="header__picture-container">
                <img className="header__picture" alt="photo de moi" src={pictureOfMe}/>
            </div>

            <div>
                <span className="header__name">quentin calmel</span>
                <span className="header__job"><span className="non-letter-smallcaps">&lt;</span>developpeur web<span
                    className="non-letter-smallcaps">/&gt;</span></span>
            </div>
        </div>
)

}

export default Header