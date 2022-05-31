import "../styles/Skills.css";
import skills from "../data/skills.json";
import SvgIcon from "./SvgIcon";

const Skills = () => {
  return (
    <div id="skills" className="Skills Section">
      <h1 className="Section__title">Compétences</h1>
      <div className="Skills__content">
        {skills.map((skillCategory) => (
          <div className="Skills__category">
            <div className="Skills__icon">
              <SvgIcon name={skillCategory.icon} />
            </div>
            <h3 className="Skills__title">{skillCategory.categoryName}</h3>
            <ul className="Skills__list">
              {skillCategory.skills.map((skill) => (
                <li className="Skills__list-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
