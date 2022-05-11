import "../styles/Skills.css"
import skills from "../data/skills.json"
import {useEffect, useRef, useState} from "react";

const Icon = ({name, size = 16, fill = "#000"}) => {
    const ImportedIconRef = useRef(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const importIcon = async () => {
            try {
                ImportedIconRef.current = (await import(`!!@svgr/webpack?-svgo,+titleProp,+ref!../assets/skills-icons/${name}.svg`)).default;

            } catch (err) {
                throw err;
            } finally {
                setLoading(false);
            }
        };
        importIcon();
    }, [name]);

    if (!loading && ImportedIconRef.current) {
        const {current: ImportedIcon} = ImportedIconRef;
        return <ImportedIcon/>;
    }

    return null;
};

const Skills = () => {

    return (
        <div className="Skills">

            <div className="Skills__skills">
                {skills.map((skillCategory) => (
                    <div className="Skills__category">
                        <h3 className="Skills__title">{skillCategory.categoryName}</h3>
                        <div className="Skills__container">
                            <div className="Skills__icon">
                                <Icon
                                    name={skillCategory.icon}
                                />
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
    )
}

export default Skills