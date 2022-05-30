import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Projects.css";
import { projects } from "../data/projects";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faAirbnb } from "@fortawesome/free-brands-svg-icons";
import SvgIcon from "./SvgIcon";

const Projects = () => {
  return (
    <div id="projects" className="Projects Section">
      <h1 className="Section__title">Projets</h1>
      <div className="Projects__content">
        {projects.map((project) => (
          <div className="Project">
            <div className="Project__thumbnail">
              <img src={project.picture} />
            </div>
            <div className="Project__content">
              {project.link && (
                <a
                  className="Project_link"
                  href={project.link}
                  target="_blank"
                />
              )}
              <div className="Project__title">{project.name}</div>
              <div className="Project__summary">{project.description}</div>
              <div className="Project__technologies">
                {project.technologies.map((technology) => (
                  <div className="tooltip">
                    <div className="Project__technology">
                      {technology.faIcon ? (
                        <FontAwesomeIcon icon={technology.faIcon} />
                      ) : (
                        // <img src={technology.icon} alt={technology.name} />
                        <SvgIcon name={technology.icon} />
                      )}
                    </div>
                    <span className="tooltip__text">{technology.name}</span>
                  </div>
                ))}
              </div>
              <a
                className="Project_repository"
                target="_blank"
                href={project.repository}
              >
                <FontAwesomeIcon
                  className="project__title-icon"
                  icon={faGithub}
                  color="black"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
