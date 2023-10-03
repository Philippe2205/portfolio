import "../css/style.css"
import { useNavigate, Link} from 'react-router-dom';
import imgProfil from "../Images/Photo-profile.png";



function Apropos() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Redirigez vers la page d'accueil lors du retour
  };

  return (
    <div className="propos-page backimg defil">
        <img src={imgProfil} alt="Photo de profile" />
        <div className="txt">
            <h1>Ce qui m’a mené au développement web</h1>
            <p>Dès mon plus jeune âgé, je suis attiré par l’univers de l’informatique et passionné par la création de solutions innovantes.</p>
              <p>À l’âge de 6 ans, j’ai mon premier ordinateur, un Macbook. Puis à peine 4 ans plus tard, j’acquiers ma première unité centrale. Pendant que mes copains jouent aux Playmobil, je passe des heures à comprendre le fonctionnement d’un ordinateur de A à Z, scrutant chaque paramètre. J’en ai avalé des notices ! Je n’ai pas hésité à démonter plusieurs fois ma tour PC. Cette démarche minutieuse m’a permis d’améliorer ses performances.</p>
              <p>Avant même mon entrée au lycée, j’avais lu un livre sur le langage C. En 2015, je me dirige tout naturellement vers un BAC STI2D option informatique où j’ai acquis les premières notions de développement web en créant des sites HTML. </p>
              <p>À cette époque, je suis un adepte du gaming et du montage vidéo. La puissance graphique de mon MacBook Pro me semble insuffisante. Le boitier eGPU qui permet d’accroître les performances d’un appareil informatique ne sera commercialisé qu’en 2016. Ce n’est absolument pas un problème pour moi ! Je décide de créer moi-même un dispositif permettant de connecter une carte graphique externe à mon MacBook Pro. Pour ce faire, je commence par me procurer une carte PCI-e que je relie à mon ordinateur via son port le plus rapide. Puis, je récupère une unité centrale qui alimentera les deux cartes. Après une semaine de travail intense, la puissance graphique de mon ordinateur est multipliée par quatre. Mission accomplie : je peux enfin réaliser mes tâches sur un écran à haute résolution sans ralentissements. </p>
              <p>En 2017, je décroche mon BTS système numérique option informatique et réseau. En parallèle, j’exerce mes compétences dans la restauration de carcasses de tours PC que je revends après leur remise en état. Je conçois également plusieurs configurations pour des amis passionnés de jeux vidéo. En 2019, je concrétise un projet personnel en élaborant ma propre unité centrale après avoir sélectionné soigneusement chacun de ses composants.</p>
              <p>Un an plus tard, j’évolue comme Technicien Help Desk au sein du CEA à Saclay pendant 2 ans et demi. C’est un métier qui exige organisation, efficacité et rapidité pour résoudre au mieux les problèmes informatiques à distance. J’ai même l’occasion de former d’autres personnes à ce poste où le respect des délais est essentiel afin de garantir des données statistiques favorables. Puis, désirant élargir mes horizons et gagner plus de liberté, je décide de me reconvertir dans le développement web.</p>
              <p>C’est ainsi qu’en février 2023, j’entreprends une formation spécifique de Développeur web avec l’organisme Openclassrooms. Aujourd’hui, je suis en mesure de concevoir des sites web attractifs, dynamiques et animés. </p>
              <p>J’aime, en particulier, collaborer avec des petites entreprises et autoentrepreneurs en manque de temps qui méritent une meilleure visibilité ou qui ne sont pas encore ou totalement déployés sur le web. Ne travaillant qu’à distance, vous ne serez pas contraints de vous déplacer pour des entretiens interminables.</p>
              <p>J’ai toujours préféré le challenge à la routine ! En étant développeur web freelance, je peux prendre le temps de vous écouter attentivement pour vous proposer des solutions sur mesure en concevant des sites personnalisés afin d’améliorer votre référencement sur le web et donc vote chiffre d’affaires.</p>
              <p className="basDeText">N’hésitez pas à me contacter pour que nous fassions de votre projet une réussite !</p>
            
            <button onClick={handleGoBack}>Retour à l'accueil</button>
        </div>
    </div>
  );
}

export default Apropos;