import "../styles/Footer.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPrint} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
return (
    <div className="footer">
        <div className="social">
            <a aria-label="vers le profil Linkedin" target="_blank" className="social__link social__tooltip"
               href="https://www.linkedin.com/in/quentin-calmel-5b29661b5/">
                <span className="social__text">Profil Linkedin</span>
                <FontAwesomeIcon className={"social__icon"} icon={faLinkedinIn}/>
            </a>
            <a aria-label="vers le repository GitHub" target="_blank" className="social__link social__tooltip"
               href="https://github.com/qcalmel">
                <span className="social__text">Repository GitHub</span>
                <FontAwesomeIcon className={"social__icon"} icon={faGithub}/>
            </a>
            <a aria-label="pour envoyer un mail" target="_blank" className="social__link social__tooltip"
               href="mailto:contact@quentincalmel.fr">
                <span className="social__text">Envoyer un mail</span>
                <FontAwesomeIcon className={"social__icon"} icon={faEnvelope}/>
            </a>
            <span aria-label="pour imprimer ce CV" className="social__link social__tooltip" onClick={window.print}>
            <span className="social__text">Imprimer ce CV</span>
            <FontAwesomeIcon className={"social__icon"} icon={faPrint}/>
        </span>
        </div>
    </div>
)
}

export default Footer