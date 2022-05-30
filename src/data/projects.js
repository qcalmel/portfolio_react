import {
  faReact,
  faNodeJs,
  faAngular,
} from "@fortawesome/free-brands-svg-icons";

import genshinPicture from "../assets/projects_img/genshin.jpg";
import portfolioPicture from "../assets/projects_img/portfolio.jpg";
import homeInventory from "../assets/projects_img/homeInventory.jpg";
import memoBean from "../assets/projects_img/bean.jpg";
import airbnbClone from "../assets/projects_img/airbnb.jpg";
export const projects = [
  {
    name: "Clone d'Airbnb",
    picture: airbnbClone,
    description:
      "Un clone du front d'airbnb développé en équipe lors d'un bootcamp",
    repository: "https://github.com/Airbnb-React-Formation/Airbnb-clone",
    link: "https://bootcamp-react-airbnb-clone.netlify.app/",
    technologies: [
      {
        name: "React",
        faIcon: faReact,
      },
    ],
  },
  {
    name: "Portfolio",
    picture: portfolioPicture,
    description: "Mon Portfolio",
    repository: "https://github.com/qcalmel/portfolio_react",
    link: "https://quentincalmel.fr",
    technologies: [
      {
        name: "React",
        faIcon: faReact,
      },
    ],
  },
  {
    name: "Genshin Impact Leveling Calculator",
    picture: genshinPicture,
    description: "Outil pour calculer divers éléments du jeu Genshin Impact",
    repository: "https://github.com/qcalmel/genshin-leveling-calculator",
    link: "https://genshin-level-calculator.netlify.app/",
    technologies: [
      {
        name: "React",
        faIcon: faReact,
      },
    ],
  },
  {
    name: "MemoBean",
    picture: memoBean,
    description: "Petit jeu de type mémo",
    repository: "https://github.com/qcalmel/TP_Ionic_Memory",
    link: "https://memobean.netlify.app/home",
    technologies: [
      {
        name: "Angular",
        faIcon: faAngular,
      },
      {
        name: "Ionic",
        icon: "ionic",
      },
    ],
  },
  {
    name: "Home Inventory",
    picture: homeInventory,
    description:
      "Application pour organiser ses objets (emplacement, date d'achat, facture, notice, période de garantie, etc...)",
    repository: "https://github.com/qcalmel/home-inventory-frontend",
    link: "",
    technologies: [
      {
        name: "React",
        faIcon: faReact,
      },
      {
        name: "Node.js",
        faIcon: faNodeJs,
      },
      {
        name: "PostegreSQL",
        icon: "postgresql",
      },
    ],
  },
];
