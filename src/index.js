import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Composant/Header";
import Accueil from "./Page/Accueil";
import Footer from "./Composant/Footer";
import Propos from "./Page/A-propos";
import Error from "./Page/Erreur";
import './index.css';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Header />
     <Routes>
     <Route path="/" element={<Accueil />} />
     <Route path="/a-propos" element={<Propos />} />
     <Route path="/portfolio" element={<Accueil />} />
     <Route path="*" element={<Error />} />
     </Routes>
     <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
