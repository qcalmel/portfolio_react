import "../styles/Skills.css"
const Skills = () => {
    return (
        <div className="Skills">
            <h2 className="title">FORMATION</h2>
            <div className="formation-container">
                <div className="formation-column">
                    <p className="formation-item">
                        <span className="year">2012</span>
                        <span className="degree">concepteur graphique</span>
                        <span className="school">mjm - graphic design - paris</span>
                    </p>
                </div>
                <div className="formation-column">
                    <p className="formation-item">
                        <span className="year">2021</span>
                        <span className="degree">developpeur web et web mobile</span>
                        <span className="school">m<span
                            className="non-letter-smallcaps">2</span>i formation - paris</span>
                    </p>
                </div>
            </div>
            <h2 className="title">OUTIL</h2>
            <div className="tool-container">
                <div style={{display: 'inline-block'}}>
                    <h3>Front-End</h3>
                    <p>React</p>
                    <p>Angular / Ionic</p>
                    <p>jQuery</p>
                    <p>Bootstrap 4</p>
                </div>

                <div style={{display: 'inline-block'}}>
                    <h3>Back-End</h3>
                    <p>Node.js / Express</p>
                    <p>Symfony 5</p>
                    <p>SQL / MariaDB / PostgreSQL</p>
                    <p>NoSQL / MongoDB</p>
                </div>

                <div style={{display: 'inline-block'}}>
                    <h3>Autre</h3>
                    <p>Git</p>
                    <p>Docker</p>
                    <p>Scrum</p>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default Skills