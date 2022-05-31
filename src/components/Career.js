import "../styles/Career.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import careerList from "../data/career.json";

const Career = () => {
  return (
    <div id="career" className="Career Section">
      <h1 className="Section__title">Parcours</h1>
      <div className="Career__timeline">
        {careerList.map((event) => (
          <div className="Career__item">
            <div className="Career__time">
              <div>
                <div className="Career__date">{event.date}</div>
                <div className="Career__duration">{event.duration}</div>
              </div>
            </div>
            <div className={`Career__event Career__event--${event.type}`}>
              <div className="Career__icon">
                <FontAwesomeIcon
                  icon={
                    event.type === "training" ? faGraduationCap : faBriefcase
                  }
                />
              </div>
              <div className="Career__content">
                <div className="Career__title">{event.title}</div>
                <div className="Career__place">{event.place}</div>
                <div className="Career__soft-skills">{event?.softSkills}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
