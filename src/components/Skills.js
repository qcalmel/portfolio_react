import "../styles/Skills.css";
import skills from "../data/skills.json";
import SvgIcon from "./SvgIcon";

const Skills = () => {
  return (
    <div id="skills" className="Skills Section">
      <h1 className="Section__title">Compétences</h1>
      <div className="Skills__skills">
        {skills.map((skillCategory) => (
          <div className="Skills__category">
            <h3 className="Skills__title">{skillCategory.categoryName}</h3>
            <div className="Skills__container">
              <div className="Skills__icon">
                <SvgIcon name={skillCategory.icon} />
              </div>
              <ul className="Skills__list">
                {skillCategory.skills.map((skill) => (
                  <li className="Skills__list-item">{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
