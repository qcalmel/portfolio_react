import "../styles/About.css";
import photo from "../assets/me-1.png";

const About = () => {
  return (
    <div id="about" className="About Section">
      <div className="About__photo-container">
        <div className="About__photo">
          <img src={photo} alt="Quentin" />
        </div>
      </div>
      <blockquote>
        Bonjour, moi c'est Quentin. Bienvenue sur mon portfolio.
      </blockquote>
      <p>
        J'ai récemment rejoint le merveilleux monde du développement web après
        une reconversion professionnelle.
      </p>
      <p>
        J'ai très vite compris que ce domaine était fait pour moi tant les
        tâches, à accomplir au quotidien, et les compétences requises me
        correspondaient.
      </p>
      <p>
        J'ai toujours été un féru d'informatique et je suis accoutumé sur le
        fait d'acquérir, en permanence, de nouvelles connaissances.
      </p>
      <p>
        Les différents postes que j'ai pu occuper, durant ma carrière, même
        s'ils n'ont pas de liens directs avec le développement informatique,
        m'ont permis de développer un grand nombre de compétences générales qui
        seront très utiles dans le développement des projets auquel je
        participerais comme le travail en équipe, l'autonomie et la rapidité
        d'adaptation.
      </p>
      <p>
        Aujourd'hui, je suis à la recherche d'un poste en Île-de-France en
        télétravail ou présentiel.
      </p>
    </div>
  );
};

export default About;
