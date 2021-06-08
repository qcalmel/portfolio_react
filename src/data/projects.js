import {faReact, faHtml5, faCss3, faNodeJs, faAngular} from "@fortawesome/free-brands-svg-icons";

import ionicIcon from "../assets/ionic.svg"
import postegresqlIcon from "../assets/postgresql.svg"
import genshinPicture from "../assets/projects_img/genshin.jpg"
import portfolioPicture from "../assets/projects_img/portfolio.jpg"
import homeInventory from "../assets/projects_img/homeInventory.jpg"
import memoBean from "../assets/projects_img/memoBean.jpg"
export const projects = [
    {
        name: "Portfolio",
        picture: portfolioPicture,
        description: "Mon Portfolio",
        repository: "https://github.com/qcalmel/portfolio_react",
        link: "https://quentincalmel.fr",
        technologies: [
            {
                name: "React",
                faIcon: faReact
            },
            {
                name: "HTML 5",
                faIcon: faHtml5
            },
            {
                name: "CSS 3",
                faIcon: faCss3
            }
        ]
    },
    {
        name: "Genshin Impact Leveling Calculator",
        picture: genshinPicture,
        description: "Outil pour calculer divers éléments du jeu Genshin Impact",
        repository: "https://github.com/qcalmel/genshin-leveling-calculator",
        link: "https://calmelquentin.alwaysdata.net/genshin-sim/",
        technologies: [
            {
                name: "React",
                faIcon: faReact
            },
            {
                name: "HTML 5",
                faIcon: faHtml5
            },
            {
                name: "CSS 3",
                faIcon: faCss3
            }
        ]
    },
    {
        name: "MemoBean",
        picture: memoBean,
        description: "Petit jeu de type mémo",
        repository: "https://github.com/qcalmel/TP_Ionic_Memory",
        link: "https://calmelquentin.alwaysdata.net/memo-bean",
        technologies: [
            {
                name: "Angular",
                faIcon: faAngular
            },
            {
                name:"Ionic",
                icon: ionicIcon
            },
            {
                name: "HTML 5",
                faIcon: faHtml5
            },
            {
                name: "CSS 3",
                faIcon: faCss3
            }
        ]
    },
    {
        name: "Home Inventory",
        picture: homeInventory,
        description: "Application pour organiser ses objets (emplacement, date d'achat, facture, notice, période de garantie, etc...)",
        repository: "https://github.com/qcalmel/home-inventory-frontend",
        link: "",
        technologies: [
            {
                name: "React",
                faIcon: faReact
            },
            {
                name: "HTML 5",
                faIcon: faHtml5
            },
            {
                name: "CSS 3",
                faIcon: faCss3
            },
            {
                name: "Node.js",
                faIcon: faNodeJs
            },
            {
                name: "PostegreSQL",
                icon: postegresqlIcon
            }
        ]
    }
]
