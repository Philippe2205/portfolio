import "../css/style.css"
import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="erreur backimg">
        <h1>ERREUR 404</h1>
        <h2>Oups! La page que vous demandez n'éxiste pas.</h2>
        <Link to="/" className="err2">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;