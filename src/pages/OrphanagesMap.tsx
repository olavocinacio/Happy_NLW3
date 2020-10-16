import React from "react";
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';

import mapMarkering from '../images/Logo_icon.svg';

import '../styles/pages/OrphanagesMap.css';

function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkering} alt="Happy"/>
                    <h2>Escdolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>

                <footer>
                    <strong>Luiz Antônio</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            <div></div>

            <Link to ='' className="create-orphanage">
                <FiPlus size={32} color = '#fff'/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;