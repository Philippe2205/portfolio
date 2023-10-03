import React from "react";
import Competance from "../Composant/Competance";
import Realisation from "../Composant/Realisation";
import Contact from "../Composant/Contact"
import HTML from '../Images/html.png';
import react from "../Images/react.png";
import node from "../Images/Node.png";
import pc from "../Images/pc.PNG";
import kasa from "../Images/kasa.jpg";
import booki from "../Images/booki.jpg";
import imgProfil from "../Images/Photo-profile.png";
import { Link } from 'react-router-dom';

const Accueil = () => {
    
  return (
    <div className="accueil backimg">
        <div className="banniere" id="hautdepage">
            <h1>Philippe Matias - Développeur Web front-end</h1>
            <div className="test" id="acc"></div>
        </div>
        <div id="a-propos"></div>
        <div className="main">
            <div className="propos-mini" id="a-propos-bas">
                <h2>A propos de moi</h2>
                <p>Je suis Philippe, développeur web front-end. Je détiens un BTS système numérique et le diplôme de Développeur intégrateur web délivré par OpenClassrooms. Spécialisé dans le React Java Script, je conçois des sites web animés, dynamiques et originaux pour vous démarquer de la concurrence. J’élabore des solutions pour augmenter les performances de votre site afin d’améliorer son référencement et sa visibilité. Que vous souhaitiez une création de site de A à Z ou une mise à jour pour renforcer ses capacités, je m’adapte à vos préférences et besoins pour vous aider à atteindre votre public cible.</p>
                <div className="vpConteiner">
                    <Link className="voirPlus" to="/a-propos">Voir plus</Link>
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>
            <div className="competence">
                <h2>Mes Compétences</h2>
                <div className="comp-conteiner">
                <Competance titre="Dev Front-end" image={HTML} text="Développement du contenu et de l'apparence globale d'un site web." tags="HTML5, CSS3, JavaScript"/>
                <Competance titre="Dev React-JS" image={react} text="Développement d'une application web performante avec react." tags="React-JS, SCSS"/>
                <Competance titre="Dev Back-end" image={node} text="Développement de la partie serveur d'un site et gestion de la base de donnée." tags="Node-JS, MongoDB"/>
                <Competance titre="Tech Montage PC " image={pc} text="Assemblage, mise a niveau, et réparation d'ordinateur personnel (PC) gamming ou bureautique." tags="Hardware"/>
                
                </div>
            </div>
            <div className="realisations">
                <div id="rea" className="ancre3"></div>
                <h2>Mes Réalisations</h2>
                <div className="rea-conteiner">
                    <Realisation image={kasa} lien="https://philippe2205.github.io/kasa/" />
                    <Realisation image={booki} lien="https://philippe2205.github.io/Booki/" />
                </div>
            </div>
        </div>
        <section className="secontact" id="cont">
            <img src={imgProfil} alt="Photo de profile" />
            <Contact />
        </section>
    </div>
  );
};

export default Accueil;