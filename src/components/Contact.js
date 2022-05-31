import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import "../styles/Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="Contact Section">
      <h1 className="Section__title">Contact</h1>
      <p className="hidden">30 ans</p>
      <p>
        <a target="_blank" href="mailto:contact@quentincalmel.fr">
          <FontAwesomeIcon className="Contact__icon" icon={faEnvelope} />
          contact@quentincalmel.fr
        </a>
      </p>
      <p>
        <a href="tel:0645499986">
          <FontAwesomeIcon className="Contact__icon" icon={faPhone} />
          06 45 49 99 86
        </a>
      </p>
      <p>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/quentin-calmel-5b29661b5/"
        >
          <FontAwesomeIcon className="Contact__icon" icon={faLinkedin} />
          Mon profil LinkedIn
        </a>
      </p>
    </div>
  );
};

export default Contact;
