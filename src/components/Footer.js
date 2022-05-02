import "../styles/Footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPrint} from "@fortawesome/free-solid-svg-icons";
import cv from "../assets/CV_Quentin_CALMEL_Développeur_Web.pdf"

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <a aria-label="vers le profil Linkedin" target="_blank" className="social__link tooltip"
                   href="https://www.linkedin.com/in/quentin-calmel-5b29661b5/">
                    <span className="tooltip__text">Profil LinkedIn</span>
                    <FontAwesomeIcon className={"social__icon"} icon={faLinkedinIn}/>
                </a>
                <a aria-label="vers le repository GitHub" target="_blank" className="social__link tooltip"
                   href="https://github.com/qcalmel">
                    <span className="tooltip__text">Repository GitHub</span>
                    <FontAwesomeIcon className={"social__icon"} icon={faGithub}/>
                </a>
                <a aria-label="pour envoyer un mail" target="_blank" className="social__link tooltip"
                   href="mailto:contact@quentincalmel.fr">
                    <span className="tooltip__text">Envoyer un mail</span>
                    <FontAwesomeIcon className={"social__icon"} icon={faEnvelope}/>
                </a>
                <a href={cv} rel="noreferrer" aria-label="pour imprimer ce CV" target="_blank" className="social__link tooltip">
                    <span className="tooltip__text">Imprimer ce CV</span>
                    <FontAwesomeIcon className={"social__icon"} icon={faPrint}/>
                </a>
            </div>
        </div>
    )
}

export default Footer
