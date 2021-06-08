import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../styles/Projects.css"
import {projects} from "../data/projects";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
    return (
        <div className="Projects">
            {projects.map((project) => (
                <div className="project">
                    <div className="project__title">
                        {project.name}
                        {
                            project.link &&
                                <a target="_blank" href={project.link}>
                                    <FontAwesomeIcon className="project__title-icon" icon={faExternalLinkAlt}/>
                                </a>
                        }
                        {
                            project.repository &&
                            <a target="_blank" href={project.repository}>
                                <FontAwesomeIcon className="project__title-icon" icon={faGithub}/>
                            </a>
                        }
                    </div>
                    <div className="project__picture-container">
                        <img className="project__picture" src={project.picture}/>
                    </div>
                    <div className="project__text">{project.description}</div>
                    <div className="project__tech">
                        {project.technologies.map((technology) => (
                            <div className="tooltip">
                            {technology.faIcon ?
                                <FontAwesomeIcon icon={technology.faIcon}/>
                                :
                                <img src={technology.icon} alt={technology.name}/>}
                                <span className="tooltip__text">{technology.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="project__links"></div>
                </div>
            ))}
        </div>
    )
};

export default Projects
