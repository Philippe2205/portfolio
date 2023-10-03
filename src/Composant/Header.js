import React, { useState } from 'react';
import "../css/style.css"
import { Link } from 'react-scroll';
import { NavLink, useLocation } from "react-router-dom";
import imgProfil from "../Images/Photo-profileC.png";

function Header() {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Pour une animation de défilement fluide
    });
  };
  
  return (
    <header className="nav">
      <div className="profile">
        {/* <img src={imgProfil} alt="Photo de profile" /> */}
        <p>Philippe Matias</p>
      </div>
      <div className="menu">
          <NavLink className="menuel" to="/" onClick={scrollToTop}>
            Accueil
          </NavLink>
        
        {location.pathname !== '/a-propos' && (
          <Link className="menuel propos-haut" to="a-propos" smooth={true} duration={1000}>
            À Propos
          </Link>
        )}
        {location.pathname !== '/a-propos' && (
          <Link className="menuel propos-bas" to="a-propos" smooth={true} duration={1000}>
            Compétences
          </Link>
        )}
        {location.pathname !== '/a-propos' && (
          <Link className="menuel" to="rea" smooth={true} duration={1000}>
            Réalisations
          </Link>
        )}
        {location.pathname !== '/a-propos' && (
          <Link className="menuel propos-bas" to="a-propos-bas" smooth={true} duration={1000}>
            À Propos
          </Link>
        )}
        {location.pathname !== '/a-propos' && (
          <Link className="menuel" to="cont" smooth={true} duration={1000}>
            Contact
          </Link>
        )}


        <div className='burger'>
          <i className="fa-solid fa-bars" onClick={toggleActive}></i>
          <div className={`burgerDeploy ${isActive ? 'activeB' : ''}`}>
            <NavLink className="menuB" to="/" onClick={scrollToTop}>
                Accueil
              </NavLink>
            {location.pathname !== '/a-propos' && (
              <Link className="menuB" to="a-propos" smooth={true} duration={1000}>
                Compétences
              </Link>
            )}
            {location.pathname !== '/a-propos' && (
              <Link className="menuB" to="rea" smooth={true} duration={1000}>
                Réalisations
              </Link>
            )}
            {location.pathname !== '/a-propos' && (
              <Link className="menuB" to="a-propos-bas" smooth={true} duration={1000}>
                À Propos
              </Link>
            )}
            {location.pathname !== '/a-propos' && (
              <Link className="menuB" to="cont" smooth={true} duration={1000}>
                Contact
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;