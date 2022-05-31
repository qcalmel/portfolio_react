import "../styles/Career.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const Career = () => {
  const careerList = [
    {
      title: "Projet en groupe - Clone du Front d'Airbnb",
      place: "Bootcamp React",
      type: "experience",
      softSkills:
        "Travail et esprit d’équipe, prise de décision, résolution de problèmes",
      date: "2022",
      duration: "1 mois",
    },
    {
      title: "Bootcamp React",
      type: "training",
      place: "Cours en ligne et projet de groupe",
      softSkills: "",
      date: "2021 - 2022",
      duration: "3 mois",
    },
    {
      title: "Diplôme de niveau 5 - Développeur Web / Web Mobile",
      type: "training",
      place: "M2i Formation, Paris",
      softSkills: "",
      date: "2020 - 2021",
      duration: "7 mois",
    },
    {
      title: "Graphiste / Webmaster",
      type: "experience",
      place: "Inter IKEA System B.V., Thiais",
      softSkills: "Respect des délais, communication, polyvalence",
      date: "2016 - 2018",
    },
    {
      title: "Logisticien",
      type: "experience",
      place: "Inter IKEA System B.V., Thiais",
      softSkills:
        "Organisation, esprit d’analyse, respect des bonnes pratiques",
      date: "2015 - 2022",
    },
    {
      title: "Diplôme de niveau 5 - Concepteur Graphique",
      type: "training",
      place: "MJM Graphic Design, Paris",
      softSkills: "",
      date: "2012",
    },
  ];
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
                <div className="Career__soft-skills">{event.softSkills}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Career;
